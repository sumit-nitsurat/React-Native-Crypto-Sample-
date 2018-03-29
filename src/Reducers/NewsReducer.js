import {
    FECTHING_NEWS,
    FECTHING_NEWS_SUCCESS,
    FECTHING_NEWS_FAIL,
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function(state = initialState, action) {

    switch(action.type) {

        case FECTHING_NEWS:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });

        case FECTHING_NEWS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FECTHING_NEWS_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });

    
        default:
            return state;
    }
    
}