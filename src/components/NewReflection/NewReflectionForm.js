import React, { Component } from 'react';
import NewReflection from './NewReflection.js';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';


const mapReduxStateToProps = (reduxState) => ({
	reduxState
});

class NewReflectionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
				topic: '',
				description: '',
				date: ''
			}
		};
	}

	// client-side route for add new reflection

	submitForm = (event) => {
		console.log(this.state, 'state');
		event.preventDefault();
		axios
			.post('/add', this.state.formData)
			.then((response) => {
				console.log('response', response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//click event for submit

	handleOtherClick = () => {};
	onInputChange = (event) => {
		const { name } = event.target;           //thanks StackOverflow
		const { formData } = this.state;
		formData[name] = event.target.value;
		this.setState({
			formData
		});
	};
	render() {
		const { formData } = this.state;
		return (
			<div>
				{/* INPUTS FOR ADDING REFLECTIONS ON ADD PAGE */}

                {/* Topic Form */}
				<h2>Topic</h2>
				<form onSubmit={this.submitForm}>
					<input value={formData.topic} onChange={this.onInputChange} name="topic" type="text" placeholder="Enter text" />

					<br />
                    {/* Description Form */}

					<h3>Description</h3>
					<input value={formData.description} onChange={this.onInputChange} name="description" type="text" placeholder="Enter text"/>

                    {/* Date form */}
                    
					<h3>Date</h3>
                    <p>{moment().format('ll')}</p>
					{/* <input value={formData.date} onChange={this.onInputChange} name="date" type="number" /> */}

					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default connect()(NewReflectionForm);
