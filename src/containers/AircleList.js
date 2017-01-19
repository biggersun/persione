/* global window document alert:true*/

import React, { Component, PropTypes } from 'react'

const propTypes = {
  initialSomeState: PropTypes.string.isRequired,
};

const defaultProps = {
  initialSomeState: 'Hello World',
};


export default class AircleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      someState: props.initialSomeState,
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }
  // @获取子元素内容
  getChildContext() {}
  // @模块渲染前
  componentWillMount() {}
  // @模块渲染后
  componentDidMount() {}
  // @模块将接受新的数据
  componentWillReceiveProps() {}
  // @判断模块需不需要重新渲染
  shouldComponentUpdate() { return true; }
  // @上面的方法返回 true， 模块将重新渲染
  componentWillUpdate() {}
  // @模块渲染结束
  componentDidUpdate() {}
  // @模块将从DOM中清除, 做一些清理任务
  componentWillUnmount() {}
  // @点击回调或者事件处理器
  onClickSubmit() {
    this.setState({
      someState: 'asdsads',
    });
  }
  render() {
    return (
      <button onTouchStart={this.onClickSubmit} >{this.state.someState}</button>
    )
  }
}

AircleList.propTypes = propTypes;
AircleList.defaultProps = defaultProps;
