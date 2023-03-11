import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducer/reducer';

//Es para conectar con la extension del navegador => REDUX DEVTOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//Es para poder hacer peticiones al server
const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;