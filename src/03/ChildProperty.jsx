import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildProperty extends Component {
  render() {
    //App.jsx에서 <ChildProperty> 컴포넌트 하위에 자식노드를 배치하면
    //ChildProperty 컴포넌트에서는 {this.props.children}로 자식노드를 받을 수 있다
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;