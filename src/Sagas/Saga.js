
import axios from 'axios';
import * as actionTypes from '../Constants/ActionTypes';
import { call, all, put, takeLatest } from 'redux-saga/effects';

function* getPhotosSaga() {
    yield takeLatest(actionTypes.GET_PHOTOS_LIST, getPhotosData);
}

function* getPhotosData() {
    try {
        const { data } = yield call(axios.get, 'https://picsum.photos/v2/list?page=2&limit=10')
        yield put({ type: actionTypes.SET_PHOTOS_LIST_SUCCESS, payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

function* getTechStackData() {
    try {
        const { data } = yield call(axios.get, 'https://run.mocky.io/v3/879ced57-e88c-49ae-bacf-e88d3712871e')
        yield put({ type: actionTypes.SET_TECHSTACK_LIST_SUCCESS, payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

function* getTechStackSaga() {
    yield takeLatest(actionTypes.GET_TECHSTACK_LIST, getTechStackData);
}

export default function* rootSaga() {
    yield all([
        getTechStackSaga(),
        getPhotosSaga()
    ])
}