import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer, { initialState } from './reducers'

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store
