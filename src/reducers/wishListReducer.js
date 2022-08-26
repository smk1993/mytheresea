import {
    ADD_TO_WISHLIST ,
} from '../actions/types';

export default function (state = {wishList : []}, action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const isAvailable = state.wishList.filter((movie) => movie.id == action.payload.id)
            if(isAvailable.length) {
                return {...state }
            } else
          
            return {...state , wishList : [...state.wishList , action.payload]}
        default:
            return state;
    }
};