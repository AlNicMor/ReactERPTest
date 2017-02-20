import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import ChessItemListRow from './ChessItemListRow';

const ChessUserList = ({chessUsers}) => {
    return (
        <List>
            {chessUsers.map(chessUser =>
                <ChessItemListRow key={chessUser.id} chessUser={chessUser} />
            )}
        </List>
    );
};

ChessUserList.propTypes = {
    chessUsers: PropTypes.array.isRequired
};

export default ChessUserList;