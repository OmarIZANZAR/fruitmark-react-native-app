import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const middlewares = [thunk]

const initialState = {
    stores: [],
    user: null,
    transactions: [],
}

const Store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middlewares))
)

export default Store