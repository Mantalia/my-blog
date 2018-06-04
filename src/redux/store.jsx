import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducer from './reducer'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const history = createHistory()
const middleware = routerMiddleware(history)
const middlewares = [thunk, middleware]

const store = createStore(
    combineReducers({
        routing: routerReducer,
        ...reducer
    }),
    applyMiddleware(...middlewares)
)

export default store
