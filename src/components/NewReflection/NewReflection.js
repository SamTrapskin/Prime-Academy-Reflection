import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewReflectionForm from './NewReflectionForm.js'



class NewReflection extends Component {
    constructor() {
        super();
        this.state = {
            reflectionItem: [],
        }
        this.addReflection = this.addReflection.bind(this);
    }

        




        addReflection(newReflection) {
            this.setState({
                reflectionItem: [...this.state.reflectionItem, newReflection],
            });
        }

        // handleSubmit(event){
        //     console.log('submit from NewReflectJS')
        //     this.props.dispatch(
        //         { type: 'ADD_REFLECTION' }
        //     )

        // }


        render() {
            let viewListItems = this.state.reflectionItem.map((reflection) => {
                return (<NewReflectionForm key={reflection.id} reflection={reflection} />)
            })
    

            return (
                <li>
                    <div className="reflectContainer">
                        <div className="reflectionItem">
                            <NewReflectionForm addEmployee={this.addEmployee} />
                            <button>[+]</button>
                            <button>[-]</button>
                        </div>
                    </div>
                </li>
            );
        }

    
}


    export default NewReflection;