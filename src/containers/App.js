import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Loading from '../components/loading/CircularProgress'

import AircleList_test from './AircleList_test'
import AircleList from './AircleList';

const App = ( props ) => {
  return (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="文章列表"
      />
      { props.progressCtrl === 'CLOSE' ? <AircleList_test /> : <Loading />}
    </div>
  </MuiThemeProvider>
)};

const mapStateToProps = (state, ownProps) => {
  return {
    progressCtrl: state.progress.progressCtrl
  }
}

export default connect(mapStateToProps)(App);

