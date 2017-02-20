import * as types from '../actions/actionTypes';

export default function chessReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_CHESSLIST_SUCCESS:
            return action.chessItems;

        default:
            return state;
    }
}