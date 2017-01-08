import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Loading from '../components/loading/CircularProgress'

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Loading />
    </div>
  </MuiThemeProvider>
);
export default App;
