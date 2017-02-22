/* global window document alert:true*/

import React, { Component, PropTypes } from 'react'

import AircleList from '../components/AircleList'
import AircleItem from '../components/AircleItem'

const propTypes = {
  aircles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
};

export default class AircleContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { aircles } = this.props
    return (
      <AircleList time='2017'>
        { aircles.map(aircle =>
          <AircleItem 
            key={ aircle.id }
            aircle={ aircle }
            />
          )
        }
      </AircleList>
    )
  }
}

AircleContainer.propTypes = propTypes;
