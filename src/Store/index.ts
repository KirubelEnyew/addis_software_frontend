
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { employeeReducer } from "./Reducer/reducer";
import { watcherSaga } from "./Saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(employeeReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watcherSaga)