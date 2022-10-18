/* 전개 연산자 (Spread Operator) 
- 나열형 자료를 추출하거나 연결할 때 사용한다
- 사용 방법은 배열이나 객체, 변수명 앞에 마침표 세 개(...)를 입력한다
- 다만 배열, 객체, 함수 인자 표현식([], {}, ()) 안에서만 사용해야 한다
*/

// ES5 문법 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]]; // 배열의 각 요소를 추출하여 새로운 배열 생성

var combined = array1.concat(array2);
var combined = [].concat(array1, array2); // concat() 함수로 두 배열을 합친다

var first = array1[0];
var second = array1[1]; // 인덱스로 배열 요소를 추출
var three = array1[2] || 'empty'; // || 연산자와 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있다

function func() {
  // 특수 변수(arguments)를 사용해 함수 내 인자 항목들을 배열로 반환 (func(a, b, c)에서 args[0]은 a, args[1]은 b, args[2]는 c 항목으로 각각 할당)
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1); // 인덱스 범위에 해당하는 배열 요소를 추출 (인덱스 범위 1번부터 마지막 항목까지 추출)
}

// ES6 문법 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2]; // 두 배열 항목을 전개 연산자로 합친다
// 결과 : combined = ['one', 'two', 'three', 'four'];

// first, second : array1의 각 위치에 있는 요소를 추출한다
// three = 'empty' : 기본값과 함께 배열 요소를 추출한다
// ...others : 2 ~ 4에서 추출하고 남은 요소를 추출한다
var [first, second, three = 'empty', ...others] = array1;
// 결과 : first = 'one', second = 'two', three = 'empty', others = []

// 함수 인자 배열을 args 변수에 할당했다
function func(...args) {
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예 (전개 연산자를 배열 표현식 없이 사용한 잘못된 예제)
// var wrongArr = ...array1;
