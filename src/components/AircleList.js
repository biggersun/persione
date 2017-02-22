/* global window document alert:true*/
import React, { Component, PropTypes } from 'react'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

import AircleItem from '../components/AircleItem'

const propTypes = {
  time: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default class AircleList extends Component {
  render() {
    console.log(this.props);
    return (
     <List>
        <Subheader>{this.props.time}</Subheader>
        {this.props.children}
     </List>
    )
  }
}

AircleList.propTypes = propTypes;
