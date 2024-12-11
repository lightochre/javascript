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
//함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스터스의 프로토타입을을 가리킨다.

//1. 모든 함수 객체는  prototype 속성을 가지며, prototype는 객체입니다.
//예제
function Person(name) {
  this.name = name;
}

console.log(Person.prototype); //{constructor}
console.log(typeof person.prototype); //undefined

//2.constructor 속성 prototype 객체는 기본적으로 constructor 속성을 포함하며 원래 함수를 가르킵니다.

//19.3.3 프로토타입의 constructor 의 프로퍼티와 생성자함수
//constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자함수를 가르킨다.
//연결은 생성자함수가 생성될 때, 즉 함수 객체가 생성될깨 이뤄진다.

//예제

//생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("lee");

//me 객체의 생성자함수는 person 이다
console.log(me.constructor === Person); //true

//19.4 리처럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
//예제
//obj 객체를 생성한 생성자 함수는 Object 이다.
const obj = new Object();
console.log(obj.constructor === Object); //true

//add 함수 객체를 생성한 생성자 함수는 Function 이다.
const add = new Function(`a`, `b`, `return a + b`);
console.log(add.constructor === Function);

//생성자 함수
function Person1(name) {
  this.name = name;
}
//me 객체를 생성한 생성자함수는 Person 이다.
const me1 = new Person1(`lee`);
console.log(me1.constructor === Person1);

//19.5 프로토타입의 생성 시점
// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성
//프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재

//19.5.1 사용자정의 생성자함수와 프로토타입 생성 시점

//19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입
//new 연산자와 함께 생성자 함수를 호출하면 인스턴스를 생성하면 다른 객체 생성 방식과 마찬가지로 추상연산자 OrdinaryObject가 호출된다.
//프로토타입은 객체다.
//일반객채와 같이 프로토타입에도 프로퍼티를 추가/삭제 할 수 있다.

//예제
function Person(name) {
  this.name = name;
}

//프로토다입에도 프로퍼티를 추가/삭제 할 수 있음
//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi My name is ${this.name}`);
};

const me2 = new Person("lee");
const you = new Person("Kim");

me2.sayHello();
you.sayHello();

console.log(me2.hasOwnProperty("name")); //true
me2.hasOwnProperty("name");

//19.7 프로토타입 체인

//예제
//me 객체의 프로토타입은 Person.prototype 이다.
Object.getPrototypeOf(me2) === Person.prototype; //true

//Person.prototype 의 프로토타입은 Object.prototype 이다.
//프로토타입의 프로토타입은 언제나  Object.prototype 이다.
Object.getPrototypeOf(Person.prototype) === Object.prototype;

//19.8 오버라이딩과 프로퍼티 섀도잉
//19.10 instanceof 연산자
//instranceof 연산자는 이항연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자함수를 가르키는 식별자를 피연산자로 받는다.
//우변의 생성자함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가, 아니면 false로 평가된다.

//예제
const Person2 = (function () {
  //생성자함수
  function Person2(name) {
    this.name = name;
  }

  //프로트타입 메서드
  Person2.prototype.sayHello1 = function () {
    console.log(`Hi My name is ${"this.name"}`);
  };

  //1. 생성자함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  //1에서 Person.prototyp에 객체 리터럴을 할당했다. 교체함
  //교체한 객체 리터럴은 constructor 프로퍼티가 없음.
  Person2.prototype = {
    //constructor 프로퍼티와 생성자 함수간의 연결을 설정
    constructor: Person2,
    sayHello1() {
      console.log(`HI MY name is ${this.name}`);
    },
  };

  //생성자함수 반환/
  return Person2;
})();

const me3 = new Person2("LEE");

//프로토타입으로 교체할 객체
const parent = {};

//프로토타입의 교체
Object.setPrototypeOf(me, parent);

//Person3 생성자함 함수dhk parent 객체는 연결되어 있지 않다.
console.log(Person2.prototype === parent); //false
console.log(parent.constructor === Person2); //false

//인스턴스 메서드
me3.sayHello1 = function () {
  console.log(`Hey! My name is ${this.name}`);
};

//인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
me3.sayHello1();

//constructor 프로퍼티가 생성자 함수를 가르킨다.
console.log(me3.constructor === Person2); //true
console.log(me3.constructor === Object); //false

//Person2.prototpe이 me3 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me3 instanceof Person2); //true

//Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me3 instanceof Object); //true

//19.11 직접상속
