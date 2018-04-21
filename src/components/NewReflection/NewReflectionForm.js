import React, { Component } from 'react';
import NewReflection from './NewReflection.js';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

class NewReflectionForm extends Component {


    render() {
  
      return (
          // Each row is a component, brings in data from OrderTable.js
          <div>
                  <h2>Topic</h2>
                  <form>
                  <input type ="text"/>
                  <br/>
                  <textarea rows="14" cols="150"></textarea>
                  <br />           
                  <button type="submit">Submit</button>
                  </form>
        </div>
      );    
    }
  }
  
  export default NewReflectionForm;