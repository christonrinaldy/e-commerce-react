import {createStore, combineReducers, applyMiddleware} from 'redux'
import 'redux-thunk'
import 'redux-logger'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {productReducer, adminReducer} from './reducer'

const reducer = combineReducers ({
    productReducer,
    adminReducer
})
const store =  createStore(reducer,applyMiddleware(thunk,logger))
export default store