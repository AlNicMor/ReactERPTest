import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import { css } from 'aphrodite';
import { styles } from './AppStyles.js';





class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <MuiThemeProvider>
          <div className={css(styles.chessList)}>
            <h1 className={css(styles.chesListTitle)}>Erp Chess</h1>
            <AppBar
              title="Title"
              iconElementLeft={<span></span>}
            />
            <List>
              <ListItem
                primaryText="Brendan Lim"
                nestedItems={[
                  <ListItem
                  key={1}
                  primaryText="Starred"
                />,
                <ListItem
                  key={2}
                  primaryText="Another Starred"
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
