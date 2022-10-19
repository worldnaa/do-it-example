// ES5 문법 - 클래스 표현 ////////////////////////////////////////////////
// Shape()의 생성자
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

// static 함수 선언 예제
Shape.create = function (x, y) {
  return new Shape(x, y);
};

// 인스턴스 함수 선언 예제1
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
};

// 인스턴스 함수 선언 예제2
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};

var s1 = new Shape(0, 0); // s1 = Shape {name: 'Shape', x: 0, y: 0}
var s2 = Shape.create(1, 2); // s2 = Shape {name: 'Shape', x: 1, y: 2}
s1.area(); // 결과 : 0
s2.area(); // 결과 : 0

// ES5 문법 - 클래스 상속 ////////////////////////////////////////////////
// 내장함수 call()을 통해 부모 생성자를 호출하여 초기값을 상속받음
function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

// assign 함수에 전달한 area 함수는 Shape.prototype에 정의된 area 함수를 덮어쓴다
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
c.area(); // 결과 : 100

// ES6 예제 - 클래스 정의 표현식 //////////////////////////////////////////
class Shape {
  // 클래스 변수 정의
  static create(x, y) {
    return new Shape(x, y);
  }

  // Shape의 생성자
  constructor(x, y) {
    this.move(x, y);
  }
  name = 'Shape'; // constructor() 안에 this.name = 'Shape' 한 것과 동일

  // 클래스 함수 정의
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s1 = new Shape(0, 0); // s1 =  Shape {name: 'Shape', x: 0, y: 0}
var s2 = Shape.create(2, 3); // s2 = Shape {name: 'Shape', x: 2, y: 3}
s1.area(); // 결과 : 0
s2.area(); // 결과 : 0

// ES6 예제 - 클래스 상속 표현식 //////////////////////////////////////////
class Circle extends Shape {
  // Circle의 생성자
  constructor(x, y, radius) {
    super(x, y); // 상위 클래스인 Shape의 함수 호출
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
c.area(); // 결과 : 100

var d = new Circle(1, 1, 0);
d.area(); // 결과 : 0
