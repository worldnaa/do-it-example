import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const {
      objValue,
      requiredStringValue,
    } = this.props;

    return (
      <div>
        {/* 내장함수 String(), Object.entries()를 사용하여 객체를 문자열로 변환 */}
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  // PropTypes.shape를 사용해 객체형 프로퍼티를 정의하면 객체 목록을 확인하기 좋다 
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // PropTypes에 정의된 변수(string, object, bool 등) 안의 특수 변수인
  // isRequired를 이용하여 필수 프로퍼티 지정
  requiredStringValue: PropTypes.string.isRequired,  
} 

export default ChildComponent2;