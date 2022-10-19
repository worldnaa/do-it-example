// ES5 문법 //////////////////////////////////////////////////////////////
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];

var combined = array1.concat(array2);
var combined = [].concat(array1, array2);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() {
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1);
}

// ES6 문법 //////////////////////////////////////////////////////////////
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
// 결과 : combined = ['one', 'two', 'three', 'four'];

var [first, second, three = 'empty', ...others] = array1;
// 결과 : first = 'one', second = 'two', three = 'empty', others = []

function func(...args) {
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 전개 연산자를 배열 표현식 없이 사용한 잘못된 예제
// var wrongArr = ...array1;
