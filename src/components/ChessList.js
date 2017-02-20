import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';

const ChessList = ({chessItems}) => {
    return (
        <List>
            {chessItems.map(chessItem =>
                <ChessItemListRow key={chessItem.id} chessItem={chessItem} />
            )}
        </List>
    );
};

ChessList.propTypes = {
    chessItems: PropTypes.array.isRequired
};

export default ChessList;