/* global window document alert:true*/
import React, { Component, PropTypes } from 'react'
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import img_a from '../../image/icon/a.jpg'
import img_b from '../../image/icon/b.jpg'
import img_q from '../../image/icon/q.jpg'

const propTypes = {
  aircle: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
};

export default class AircleItem extends Component {
  render() {
    const { aircle } = this.props
    return (
       <div>
        <ListItem
          leftAvatar={<Avatar src={ img_a } />}
          primaryText={aircle.title}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Brendan Lim</span> --
              {aircle.content};
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={false} />
       </div>
    )
  }
}

AircleItem.propTypes = propTypes;
