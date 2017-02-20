import { List, ListItem } from 'material-ui/List';
import { ListItem } from 'material-ui/List';

const ChessItemListRow = ({chessUser}) => {
    return (
        <ListItem
            primaryText={chessUser.userName}
        />
    );
};

ChessItemListRow.propTypes = {
    chessUser: PropTypes.object.isRequired
};

export default ChessItemListRow;