import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';


const reducerOne = (state, action) => {
    if (action.type === 'SUBMIT_BUTTON') {
        console.log('hey im a reducer', action)

    }
    return {}
}
const reducerTwo = (state, action) => {
    if (action.type === "DERP_BUTTON"){
        console.log('hey im reducer #2 ')

    }
    return {}
}

//Redux store
const storeInstance = createStore(

    combineReducers(
        {
            reducerOne,
            reducerTwo
        }

    )
)





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();