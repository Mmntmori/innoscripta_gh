import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import sagas from './rootSaga'

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(sagas);

  return store;
};

const store = createAppStore();


export default store;