import { combineReducers } from 'redux';
import chessItems from '/chessReducer';

const rootReducer = combineReducers({
    chessItems
});

export default rootReducer;