import React, { Component } from 'react';
import NewReflection from './NewReflection.js';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

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
                  <Button bsStyle="primary">Primary</Button>
                  <Jumbotron>
                  <h2>Hello, world!</h2>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Button bsStyle="primary">Learn more</Button>
                    <Button bsStyle="primary">Learn more</Button>
                  </p>
                </Jumbotron>;
                <Jumbotron>
                  <h1>Hello, world!</h1>
                  <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                  </p>
                  <p>
                    <Button bsStyle="primary">Learn more</Button>
                  </p>
                </Jumbotron>;
                  
        </div>
      );    
    }
  }
  
  export default connect() (NewReflectionForm);