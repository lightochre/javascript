// 01 객체 리터럴
// 객체는 프로퍼티와 메서드로 구성된 집합체
// 자바스크립트는 프로토타입 기반 객체지향 언어로 다양한 객체 생성방법을 지원
// 1.객체리터럴, 2.object 생성자 함수, 3.생성자함수, 4.object.create 메서드, 5.클래스(ES6)

var person = {
    name: 'Lee',
    sayHello: function(){
        console.log(`Hello: My name is ${this.name}`);
    }
};
console.log(typeof person);
console.log(person);

//중괄호 내에 프로퍼티를 정의하지 않으면 빈객체가 생성
var empty = {};//빈 객체
console.log(empty);

// 02 프로퍼티
// 객체는 프로퍼티의 집합이며 키와 값으로 구성된다.

// 예제
var person = {
    // 프로퍼티 키는 name, 값 Lee
    name : 'Lee',
    age: 20
}
console.log (person);

// 예제
var obj = {};
var key = 'hello';

//ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
//ES6 : 계산된 프로퍼티 이름
// var obj = {[key]:'world'}
console.log(obj);

// 예제
// 빈 문자열도 프로퍼티 키로 사용할 수 있다.
var foo = {
    '' : ''
}
console.log(foo);

// 03.메서드 
// 메서드는 객체에 묶여 있는 함수를 의미한다.

// 예제
  var  circle ={
    radius: 5, //프로퍼티
// 원의 지름
getDiameter : function () { //메서드
    return 2 * this.radius; //this는 circle을 가르킨다.
    }
};

console.log(circle.getDiameter());

// 04.프로퍼티 접근
// 프로퍼티 접근 방법은 두가지 - 마침표(.), 대괄호연산자 ([...])

// 예제
var _person = {
    name : 'Lee'
};
// 마침표 접근법
console.log(_person.name);

// 대괄호연산자
console.log(_person['name']);


// 07.프로퍼티 값 갱신
var person_ = {
    name : 'Lee'
};
// person 객체에 name 프로퍼티가 존재하므로, name 프로퍼티의 값이 갱신된다.
person_.name = 'Kim';
console.log(person_.name);



// 08.프로퍼티 동적 생성 

// 예제
var person__ = {
    name : 'Lee'
}
 
// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person__.age = 20;
console.log(person__);



// 09.프로퍼티 삭제
// delete 연산자는 객체의 프로퍼티를 삭제한다.

// 예제
var __person = {
    name : 'Lee'
}

// 프로퍼티 동적생성
__person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete __person.age;
console.log(__person);



// 10.ES6에서 추가된 개개체 리터럴의 확장 기능
// 예제 - ES5
var x = 1, y = 2;
var obj = {
    x : x, y : y
};
console.log(obj);

// 예제 - ES6 축약
let a = 1, b = 5;
const _obj = {a, b};
console.log(_obj);