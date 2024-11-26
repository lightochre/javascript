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
const circle = {
  radius: 5, //반지름

  //원의 지름 : 2r
  getDiameter() {
    return 2 * this.radius;
  },

  //원의 둘레 : 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle);

console.log(circle.getDiameter());
console.log(circle.getPerimeter());

//객체지향 프로그램은 객체의 상태를 나타내는 데이타
//상태데이터를 조작할 수 있는 동작를 하나의 논리적인 단위로 묶어서 생각한다.
//객체는 상태데이터와 동작을 하나의 논리적인 단위로 묶는 복합적인 자료구조이다.
//객체의 상태를 프로퍼티
//동작을 메서드
