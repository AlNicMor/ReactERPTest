import { List, ListItem } from 'material-ui/List';
import { ListItem } from 'material-ui/List';

const ChessListRow = ({chessItemDetail}) => {
    return (
        <ListItem
            primaryText="Brendan Lim"
            nestedItems={[
                <ListItem
                    key={1}
                    primaryText="Starred"
                    rightIconButton={<RaisedButton label="Edit" secondary={true} />}
                />,
                <ListItem
                    key={2}
                    primaryText="Another Starred"
                    rightIconButton={<RaisedButton label="Edit" secondary={true} />}
                />,
            ]}
        />

    );

};
