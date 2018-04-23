import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewReflectionForm from './NewReflectionForm.js';


//Create the NewReflection class to add to server

class NewReflection extends Component {
	constructor() {
		super();
		this.state = {
			reflectionItem: []
		};
		this.addReflection = this.addReflection.bind(this);
    }
    
    //Setting State data for new Reflection
	addReflection(createReflection) {
		this.setState({
			reflectionItem: [ ...this.state.reflectionItem, createReflection ]
		});
	}

	render() {
		let viewListItems = this.state.reflectionItem.map((reflection) => {         // create the viewListItems array
			return <NewReflectionForm key={reflection.id} reflection={reflection} />
		});

		return (
			<li>
				<div className="reflectContainer">
					<div className="reflectionItem">
						<NewReflectionForm/>
						
					</div>
				</div>
			</li>
		);
	}
}

export default NewReflection;
