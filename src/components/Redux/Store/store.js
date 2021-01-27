import {combineReducers,createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {MainReducer} from '../Reducer/mainReducer'

const reducers = combineReducers({
    date:MainReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

export default store