import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewReflection from '../NewReflection/NewReflection.js'
import axios from 'axios';


class ViewReflection extends Component {

    constructor(props) {
        super(props)

        this.state = ({
            viewList: []
        })
    }

        getReflections = () => {
        axios.get('/order').then((response) => {
            console.log('client getOrderItems', response);
            this.setState({
                orderList: response.data
            })
        }).catch((error) => {
            console.log('error getting order items', error);
        })
    }







}

export default ViewReflection;