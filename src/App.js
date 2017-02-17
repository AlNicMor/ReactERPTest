import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { css } from 'aphrodite';
import { styles } from './AppStyles.js';





class App extends Component {

  state = {
    dataSource: ['Alan', 'Guada', 'Ana'],
  };


  render() {
    return (
      <div className={css(styles.container)}>
        <MuiThemeProvider>
          <div className={css(styles.chessList)}>
            <h1 className={css(styles.chesListTitle)}>Erp Chess</h1>
            <AppBar
              title="Title"
              iconElementLeft={<span></span>}
              iconElementRight={<FlatButton
                backgroundColor="#a4c639"
                hoverColor="#8AA62F"
                label="New" />}
            />
            <AutoComplete
              dataSource={this.state.dataSource}
              filter={AutoComplete.caseInsensitiveFilter}
            />
            <List>
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
              <ListItem
                primaryText="Brendan Lim"
              />
              <ListItem
                primaryText="Brendan Lim"
              />
              <ListItem
                primaryText="Brendan Lim"
              />
            </List>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}



App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
