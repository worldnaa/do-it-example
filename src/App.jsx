import React, { Component } from 'react';
import ChildComponent from './03/ChildComponent';
import PropComponent from './03/PropsComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import ChildProperty from './03/ChildProperty';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';

class App extends Component {
  //render() 함수는 HTML을 반환한다(웹 브라우저에 출력)
  render() {
    return ( 
      <div> 
        <ForceUpdateExample />
      </div> 
    );
  }
}

export default App;

// return ( // return 아래는 JSX(JavaScript XML)의 양식
//   <div>
//     <div><b>지루할 때:</b><BooleanComponent bored /></div> {/* boolean 타입의 프로퍼티 이름 선언 시 true */}
//     <div><b>즐거울 때:</b><BooleanComponent /></div>       {/* boolean 타입의 프로퍼티 이름 생략 시 false */}
//   </div>
// );
//=============================================================================================================
// return ( 
//   <ChildProperty> 
//     <div><span>자식 노드</span></div>
//   </ChildProperty> 
// );