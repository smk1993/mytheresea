import {
    FETCH_SECOND_GENRE ,
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SECOND_GENRE:
            return action.payload;
     
        default:
            return state;
    }
};