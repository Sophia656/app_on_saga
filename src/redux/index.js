import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import { contactsReducer } from './reducers/contactsReducer';
import { tasksReducer } from './reducers/tasksReducer';
import { rootWatcher } from './saga';


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    contactsReducer,
    tasksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootWatcher)