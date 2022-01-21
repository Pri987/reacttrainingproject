import * as actionTypes from '../Constants/ActionTypes'

const initialState = {
    techStackData: [],
    photosList: [],
    location: '',
    jobOpeningsData:[],
    experience: ''
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOCATION_SUCCESS:
            return {
                ...state,
                location: action.payload.location
            }
        case actionTypes.SET_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experience: action.payload.experience
            }
        case actionTypes.SET_TECHSTACK_LIST_SUCCESS:
            return {
                ...state,
                techStackData: action.payload
            }
        case actionTypes.SET_PHOTOS_LIST_SUCCESS:
            return {
                ...state,
                photosList: action.payload
            }
        case actionTypes.GET_JOB_OPENINGS_DATA_SUCCESS:
            return {
                ...state,
                jobOpeningsData: action.payload
            }
        default:
            return state;
    }

}

export default Reducer;