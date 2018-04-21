import React, { Component } from 'react';
import ViewReflection from './ViewReflection.js';
import { connect } from 'react-redux';
import moment from 'moment';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

class ViewReflectionRow extends Component {


    render() {
  
      return (
          // Each row is a component, brings in data from OrderTable.js
                  <tr>
                  <td>{this.props.reflection.topic}</td>
                  <td>{moment().format('ll')}</td>
                  <td>{this.props.reflection.description}</td>
                  </tr>
      );
    }
  }
  
  export default ViewReflectionRow;