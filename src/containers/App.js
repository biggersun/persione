import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Loading from '../components/loading/CircularProgress'

import AircleContainer from './AircleContainer';

const App = ( props ) => {
  return (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="文章列表"
      />
      { props.progressCtrl === 'CLOSE' ? <AircleContainer aircles={ props.aircleList } /> : <Loading />}
    </div>
  </MuiThemeProvider>
)};

const mapStateToProps = (state, ownProps) => {
  return {
    progressCtrl: state.progress.progressCtrl,
    aircleList: state.aircles
  }
}

export default connect(mapStateToProps)(App);

