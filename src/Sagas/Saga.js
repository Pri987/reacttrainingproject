
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

function* setLocationData(location) {
    try {
        yield put({ type: actionTypes.SET_LOCATION_SUCCESS, payload: location })
    } catch (e) {
        console.log(e.message)
    }
}

function* setLocation() {
    yield takeLatest(actionTypes.SET_LOCATION, setLocationData);
}

function* setExperienceData(experience) {
    try {
        yield put({ type: actionTypes.SET_EXPERIENCE_SUCCESS, payload: experience })
    } catch (e) {
        console.log(e.message)
    }
}

function* setExperience() {
    yield takeLatest(actionTypes.SET_EXPERIENCE, setExperienceData);
}

function* getJobOpeningsData() {
    try {
        const { data } = yield call(axios.get, 'https://run.mocky.io/v3/93cf5f93-6364-4cd2-8678-1f03b5eb1625')
        yield put({ type: actionTypes.GET_JOB_OPENINGS_DATA_SUCCESS, payload: data })
    } catch (e) {
        console.log(e.message)
    }
}

function* getJobOpenings() {
    yield takeLatest(actionTypes.GET_JOB_OPENINGS_DATA, getJobOpeningsData);
}

export default function* rootSaga() {
    yield all([
        getTechStackSaga(),
        getPhotosSaga(),
        setExperience(),
        setLocation(),
        getJobOpenings()
    ])
}