import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewReflectionRow from './ViewReflectionRow.js'
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

class ViewReflection extends Component {

    constructor(props) {
        super(props)

        // CREATING EMPTY ARRAY (viewList) TO GET BACK DATABASE DATA

        this.state = ({
            viewList: []
        })
    }
    //GET request for database reflection retreival //

    getReflection = () => {
        axios.get('/view').then((response) => {
            console.log('client get reflection view', response);
            this.setState({
                viewList: response.data
            })
        }).catch((error) => {
            console.log('error getting order items', error);
        })
    }

    componentDidMount() {
        this.getReflection();
    }



    render() {
        let viewListItems = this.state.viewList.map((reflection) => {       //populating the viewListItems array//
            return (<ViewReflectionRow key={reflection.id} reflection={reflection} />)
        })

        return (
            // Each row is a component, brings in data from Orders.js
            <div>
                
                  

                <p>{viewListItems}</p>

                
            </div>
        );
    }
}







export default ViewReflection;