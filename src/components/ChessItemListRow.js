import { List, ListItem } from 'material-ui/List';
import { ListItem } from 'material-ui/List';

const ChessItemListRow = ({chessItem}) => {
    return (
        <ListItem
            primaryText={chessItem.codigo_usuario}
            nestedItems={chessItem.map(chessItemDetail =>
                <ChessItemDetailListRow key={chessItemDetail.id} chessItemDetail={chessItemDetail} />
            )}
        />

    );

};