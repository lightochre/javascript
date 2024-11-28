//19장 프로토타입
//19.1 객체지향 프로그래밍
//여러개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현

//예제 19.1
//이름과 주소 속성을 갖는 객체
const person = {
  name: "lee",
  address: "Seoul",
};
console.log(person);

//속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체
//객체지향 프로그램밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.

//예제 19.2
//원이라는 개념의 객체
const circle1 = {
  radius1: 5, //반지름

  //원의 지름 : 2r
  getDiameter() {
    return 2 * this.radius1;
  },

  //원의 둘레 : 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius1;
  },
};

console.log(circle1);

console.log(circle1.getDiameter());
console.log(circle1.getPerimeter());

//객체지향 프로그램은 객체의 상태를 나타내는 데이타
//상태데이터를 조작할 수 있는 동작를 하나의 논리적인 단위로 묶어서 생각한다.
//객체는 상태데이터와 동작을 하나의 논리적인 단위로 묶는 복합적인 자료구조이다.
//객체의 상태를 프로퍼티
//동작을 메서드

//19.2 상속과 프로토타입
// 상속은 객체지향 프로그램밍의 핵심으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가  상속받아 그래도 사용할 수 있는 것을 말한다.

//예제 19-3
//생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle2 = new Circle(1);
const circle3 = new Circle(2);

console.log(circle2.getArea === circle3.getArea); //false

console.log(circle2.getArea()); //3.141592653589793
console.log(circle3.getArea()); //12.566370614359172

//19.3 프로토타입 객체
//프로토타입은 자신의 constructor 프로퍼티를 통해서 생성자함수에 접근할 수 있고, 생산자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근 할 수 있다.

//1.prototype 객체는 생성자 함수에 자동으로 생성되는 객체
//예제19.3
function Person(name) {
  this.name = name;
}
//persone.prototype 은 prototype 객체
console.log(Person.prototype);

//2.prototype 객체의 주요 특징
//예제 19.4
function Animal(name) {
  this.name = name;
}

//prototype 객체에 메서드 추가
Animal.prototype.speak = function () {
  console.log(`${this.name}이 소리를 냅니다.`);
};

//prototype 객체의 속성 추가
Animal.prototype.type = "동물";

let dog = new Animal("멍멍이");
let cat = new Animal("야옹이");

console.log(dog.type);
console.log(cat.type);
dog.speak();

//19.3.2 함수객체의 prototype 프로퍼티
