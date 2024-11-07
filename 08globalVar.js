//14 전역변수의 문제점
//14.1 변수의 생명주기
//14.1.1 지역 변수의 생명주기

//예제
var x = 'global';

function foo(){
    console.log(x); //undefined
    var x = 'local';
}
foo();
console.log(x);

//14.1.2 전역 변수의 생명주기