import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

import rootReducer from "./reducer";

const sagaMiddleWare = createSagaMiddleware();

const initialState = {
  posts: {},
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(rootSaga);

export default store;
