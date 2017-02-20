import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chessActions from '../actions/chessActions';
import ChessUserList from '../components/ChessUserList';

class ChessUserListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <ChessUserList chessUsers={chessItems} />
        );
    }



}

ChessUserListContainer.propTypes = {
    chessItems: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        chessItems: state.chessItems
    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(chessActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessUserListContainer);