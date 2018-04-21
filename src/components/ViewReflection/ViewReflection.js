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

        this.state = ({
            viewList: []
        })
    }

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
        let viewListItems = this.state.viewList.map((reflection) => {
            return (<ViewReflectionRow key={reflection.id} reflection={reflection} />)
        })

        return (
            // Each row is a component, brings in data from Orders.js
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Topic</td>
                            <td>Description</td>
                            <td>Date</td>
                        </tr>

                        {viewListItems}

                    </tbody>
                </table>

            </div>
        );
    }
}







export default ViewReflection;