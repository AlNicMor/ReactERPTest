import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const MainAppBar = () => {
    return (
        <AppBar
            title="Title"
            iconElementLeft={<span></span>}
            iconElementRight={
                <FlatButton
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    label="New" />}
        />
    );
};

export default MainAppBar;