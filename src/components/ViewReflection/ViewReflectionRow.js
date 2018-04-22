import React, { Component } from 'react';
import ViewReflection from './ViewReflection.js';
import { connect } from 'react-redux';
import moment from 'moment';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './ViewReflection.css';





const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  

class ViewReflectionRow extends Component {


    render() {
  
      return (
          // Each row is a component, brings in data from OrderTable.js
          <div>
                  
                  <Jumbotron>
                  <h1>{this.props.reflection.topic}</h1>
                  <p>
                  {this.props.reflection.description}
                  </p>
                  <br />
                  <p>{moment().format('ll')}</p>
                  <p class="blue">
                    <Button bsStyle="primary">Learn more</Button><Button bsSize="xsmall">
        <Glyphicon glyph="bookmark" /> bookmark<Button bsSize="xsmall">
        <Glyphicon glyph="trash" /> trash
      </Button>
      </Button>
                  </p>
                </Jumbotron>;
                </div>
      );
    }
  }
  
  export default ViewReflectionRow;