import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './../Reducers/Reducer';
import rootSaga from '../Sagas/Saga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}