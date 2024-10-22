//1. Use strict 
//add in ES 5
//use this for Valina Javascript
'use strict';

//2. Variable - 변수
//let (add im ES6)
let globaName ='global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);   
}
console.log(name);
console.log(globaName);

//var (don't ever use this!)
//var hoisting (끌어올리다)
//var no block scope

//3.숫자타입
//3.1 템플릿 리터럴 -문자열표기법, 백틱(``)를 사용한다.
//var template = `Template literal`;
var template = `<ul>
    <li></li>
</ul>`;
console.log(template);

//일반문자열 내에서는 줄바꿈이 허용되지 않는다.
//이스케이프 시퀀스를 사용
// var str = 'Hello
// world';
var _str = 'Hello \n world';
console.log(_str);

var frist = 'Ung-mo';
var last = 'Lee';
// console.log(`My name is` + frist +  ''  +  last  +  `.`);
console.log(`My name is ${frist} ${last}`); //ES6 표현식
console.log(`1+2 = ${1+3}`);

// 4.동적타이핑
//자바스트립트는 데이터 타입의 값을 자유롭게 할당 할 수 있다.

var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'Hellow';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol(); //Symbol
console.log(typeof foo);

foo = {} //객체
console.log(typeof foo); //object

foo = [] //배열
console.log(typeof foo); //object

foo = function() {}; //함수
console.log(typeof foo);
