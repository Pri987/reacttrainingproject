import * as actionTypes from '../Constants/ActionTypes'

const initialState = {
    techStackData: [],
    photosList: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }

}

export default Reducer;