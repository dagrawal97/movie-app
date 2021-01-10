import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // for handling when action return function
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger(obj, next, action)
//logger(obj)(next)(action)
// const logger = function({ dispatch, getState}){
//     return function(next){
//         return function(action){
//             //middleware code
//             console.log('ACTION_TYPE = ', action.type);
//             next(action);
//         }
//     }
// }
//another way to middleware
const logger = ({ dispatch, getState}) => (next) => (action) => {
    //logger code
    if(typeof action != 'function'){
        console.log('ACTION_TYPE = ', action.type);
    }
    
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
 
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
