import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer,  productSaveReducer,
    productDeleteReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = { cart: { cartItems }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));    

export default store;