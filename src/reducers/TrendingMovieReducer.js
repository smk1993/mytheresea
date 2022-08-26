import {
    FETCH_THIRD_GENRE ,
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_THIRD_GENRE:
            return action.payload;
     
        default:
            return state;
    }
};