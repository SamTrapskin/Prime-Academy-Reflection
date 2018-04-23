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


  // REFLECTIONS FROM DB FOR THE VIEW PAGE//

class ViewReflectionRow extends Component {
	render() {
		return (
			// Each row is a component, brings in data from OrderTable.js
			<div>
				<Jumbotron>
        <div>
          {/* reflection topic */}
					<h3>{this.props.reflection.topic}</h3>
          {/* reflection description */}
					<p>{this.props.reflection.description}</p>
					<br />
          {/* reflection date */}
					<p>{moment().format('ll')}</p>
			  </div>

            {/* bookmark button/icon */}
						<Button bsSize="xsmall">
              <Glyphicon glyph="bookmark" /> bookmark


              {/* tash button/icon */}
            <Button bsSize="xsmall">
								<Glyphicon glyph="trash" /> trash
							</Button>
						</Button>
				
				</Jumbotron>
			</div>
		);
	}
}

export default ViewReflectionRow;
