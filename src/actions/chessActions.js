import * as types from './actionTypes';
import ChessApi from '../api/ChessApi';

const chessApi = ChessApi();

export function loadChessListSuccess(chessItems) {
    return { type: types.LOAD_CHESSLIST_SUCCESS, chessItems };
}


export function loadChessList() {
    return function (dispatch) {
        return chessApi.fetchChessList().then(chessItems => {
            dispatch(loadChessListSuccess(chessItems));
        }).catch(error => {
            throw (error);
        });
    }
}