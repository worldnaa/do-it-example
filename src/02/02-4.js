// 가변변수 let ////////////////////////////////////////////////////////
let number = 1;
number = number * 3;

let string = '문자';
string = '다른 문자';

let array = [];
array = [1, 2, 3];

let object = {};
object = { name: '새 객체' };

// 불변변수 const ////////////////////////////////////////////////////////
const num = 1;
num = 3; // 타입 에러 발생

const str = '문자';
str = '새 문자'; // 타입 에러 발생

const arr1 = [];
arr1 = [1, 2, 3]; // 타입 에러 발생

const obj = {};
obj = { name: '내 이름' }; // 타입 에러 발생

// JS 내장 함수로 불변 변수 값 변경하기 ///////////////////////////////////////
const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); // arr2 = [0]

const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj2 = { name: '새이름' }
delete obj2.name; //obj2 = {}

// 무결성을 유지하면서 불변 변수 값 변경하기 /////////////////////////////////
const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr5 = [1, 2, 3], arr6 = [1]
const [first, ...arr7] = arr5; // first = 1, arr7 = [2, 3]

const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // name = '새이름', obj5 = { age: 20 }

///////////////////////////////////////////////////////////////////////////////
const arr = [1, 2, 3];

// 가변 변수를 사용한 예
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
