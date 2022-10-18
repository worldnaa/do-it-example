import React, { Component } from 'react';

class RCC extends Component {
  render() {
    var text = '따옴표';
    return <div name="name">{text}</div>;
  }
}

export default RCC;

// .prettierrc 파일에 설정한 내용 => Ctrl+Shift+P => 'Format Document' + Ener => 포맷 적용
// {
//     "useTabs": false,         ==> 탭을 사용할 때 빈칸으로 채운다
//     "printWidth": 100,        ==> 파일 최대 길이를 100칸으로 지정한다
//     "tabWidth": 2,            ==> 탭의 빈칸을 두칸으로 지정한다
//     "trailingComma": "all",   ==> 나열 항목의 마지막에 항상 쉽표(,)를 붙인다
//     "semi": true,             ==> 실행 줄 마지막에 항상 세미콜론(;)을 붙인다
//     "singleQuote": true       ==> 문자 따옴표를 작은따옴표('')로 통일한다
// }
