import React, { Component } from 'react';
import NewReflection from './NewReflection.js';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

class NewReflectionForm extends Component {

    handleClick = () => {
        this.props.dispatch(
        {type: 'SUBMIT_BUTTON'}
     )
    }

    handleOtherClick = () => {
        this.props.dispatch(
            {type:'DERP_BUTTON'}
        )
    }
    render() {
  
      return (
          // Each row is a component, brings in data from OrderTable.js
          <div>
                  <h2>Topic</h2>
                  
                  <input type ="text"/>
                  
                  <br />           
                  <button onClick={this.handleClick}type="submit">Submit</button>
                  <button onClick={this.handleOtherClick}type="submit">Derp</button>

                  
        </div>
      );    
    }
  }
  
  export default connect() (NewReflectionForm);