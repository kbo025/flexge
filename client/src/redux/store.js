import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './saga/index';

// const store = configureStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
