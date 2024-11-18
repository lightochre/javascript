//17장 생성자  함수에 의한 객체 생성

//17.1 object 생성자 함수
//생성자 함수란 -> new 연산자와 함께 호출하여 객체를 생성하는 함수
//생성자 함수에 의해 생성된 객체를 인스턴스(instance)라 한다.
//자바스크립트는 object 생성자 함수 이외도 string, number, Boolean, Function, Array, Date, RegExp, Promise 빌드인 생성자 함수를 제공

//예제
//빈 객체의 생성
const person = new Object();

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi My name is ' + this.name);
}

console.log(person); //{name: 'Lee', sayHello: ƒ}
person.sayHello(); //함수호출 //Hi My name is Lee


//자바스크립트는 object 생성자 함수 이외도 string, number, Boolean, Function, Array, Date, RegExp, Promise 빌드인 생성자 함수를 제공

//예제
//string 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj);//object
console.log(strObj); //String {'Lee'}

//Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1234);
console.log(typeof numObj);//object
console.log(numObj);//Number {1234}

//Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

//Function 생성자 함수에 의한 Function 객체 생성
const func = new Function('x', 'return x * y');
console.log(typeof func);
console.log(func);

//Array 생성자 함수에 의한 Array(배열) 객체 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

//RegExp 생성자 함수에 의한 RegExp 객제(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

//Date 생성자 함수에 의하 Date 객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);


//17.2 생성자 함수

//17.2.1 객체 리터럴에 의한 객체 생성 방식의 문제점
//객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
//동일한 프로퍼티를 갖는 객체는 여러 개 생성해야하므로 비 생산적이다.

//예제
//객체마다 프로퍼티 값이 다를수 있지만 메서드는 내용이 동일
const circle1 = {
    radius : 5,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle1.getDiameter());// 10

const circle2 = {
    radius : 10,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle2.getDiameter());//20

//17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
//동일한 객체 여러개를 간편하게 생성할 수 있다.

//예제
//생성자 함수
function Circle(radius) {
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가르킨다
    //인스턴스를 초기화
    this.radius = radius;
    this.getDiameter1 = function(){
        return 2 * this.radius;
    };
}

//인스턴스 생성
const circle3 = new Circle(5); //반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(20); //반지름이 20인 Circle 객체를 생성

console.log(circle3.getDiameter1()); //10
console.log(circle4.getDiameter1()); //40

//this는 객체 자신의 프로퍼티나 메서를 참조하기 위한 자기 참조 변수
//this가 가르키는 호출방식은 동적으로 변한다
//일반함수로서 호출 -> 전역객체
//메서드로서 호출 -> 메서다를 호출한 객체
//생성자 함수로서 호출 ->생성자 함수가 (미래의) 생성할 인스터스
 
//생성자 함수는 이름 그대로 객체를 생성하는 함수
//일반함수와 동일한 방법으로 생성자 함수를 만든다.
//new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다. 
//new연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반함수로 동작

//17.2.3 생성자 함수의 인스턴스 생성과정

//1.인스턴스 생성과 this 바인딩
//암묵적으로 빈 객체가 된지만 
//예제
//생성자 함수
function Circle(radius) {
    //1.암묵적으로 인스터스가 생성되고 this에 바인딩된다.
    console.log(this);
    
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가르킨다
    //인스턴스를 초기화
    this.radius = radius;
    this.getDiameter1 = function(){
        return 2 * this.radius;
    };
}

//바인딩 -> 식별자와 값을 연결하는 과정을 말한다.

//2.인스턴스 초기화
//생성자 함수에 기술되어있는 코드가 한줄씩 실행되어 this에 바인딩되어 있는 인스턴스를 초기화한다.

//3 인스턴스 반환
//생성자 함수 내부에서 모든 처리가 끝나면 완성된 인스턴스가 바안딩되 this를 안묵적으로 반환한다.

function Circle(radius) {
    //1.암묵적으로 인스터스가 생성되고 this에 바인딩된다.
    console.log(this);
    
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가르킨다
    //2.인스턴스를 초기화 -this에 바인딩되어 있는 인스턴스가 초기화한다.
    this.radius = radius;
    this.getDiameter1 = function(){
        return 2 * this.radius;
    };
}