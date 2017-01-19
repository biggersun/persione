import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import AircleList from './AircleList';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="文章列表"
      />
      <AircleList initialColor="dasds" />
    </div>
  </MuiThemeProvider>
);
export default App;
