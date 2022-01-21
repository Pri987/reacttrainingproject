import * as actionTypes from '../Constants/ActionTypes';

export const getTechStackList = () => {
    return {
        type: actionTypes.GET_TECHSTACK_LIST
    }
};

export const getPhotosList = () => {
    return {
        type: actionTypes.GET_PHOTOS_LIST
    }
};

export const getJobOpeningsData = () => {
    return {
        type: actionTypes.GET_JOB_OPENINGS_DATA
    }
};

export const setLocation = (location) => {
    return {
        type: actionTypes.SET_LOCATION,
        location
    }
};

export const setExperience = (experience) => {
    return {
        type: actionTypes.SET_EXPERIENCE,
        experience
    }
};
