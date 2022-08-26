import {
    FETCH_TRENDING_MOVIES ,
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TRENDING_MOVIES:
            return action.payload;
     
        default:
            return state;
    }
};