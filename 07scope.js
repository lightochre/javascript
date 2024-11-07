// 13 스코프(scope)
// 예제
function add(x, y){
    //매개변수는 함수 몸체 내부에서만 참조할수 있다.
    //매개변수의 스코프는 함수 몸체 내부이다.
    console.log(x, y); 
    return x + y ;
}
add (2, 5);


//예제
var x = 'global';
function foo(){
    var x = 'local';
    console.log(x);
}
foo(); //local
console.log(x); //global

// 예제
// var 키워드로 선언한 변수의 중복선언
// 01
function foo1(){
    var x = 1;
    //ver 키워드로 선언된 변수는 스코프내에서 중복선언을 허용한다.
    // 아래 변수 선언문은 자바스트립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    var x = 3;
    console.log(x);
}
foo1();

//13.2.1 전연과 전역 스코프
//예제
var x = 'global x';
var y = 'global y';

function outer() {
    var z ="outer's local z";

    console.log(x); //1
    console.log(y);//2
    console.log(z);//3

    function inner() {
        var x ="inner's local x";

        console.log(x); //4
        console.log(y); //5
        console.log(z); //6
    }
    inner();

}
outer();

console.log(x); //7
// console.log(z); //REferenceError

//13.3 스코프 체인
//13.3.2 스코프 체인에 의한 함수 검색
//예제
//전역함수
function foo(){
    console.log('global function foo');
}

//중첩함수
function bar(){
    function foo(){
        console.log('local function foooo');
    }
    foo(); //local function foo
}
bar();

// 13.4 함수레벨 스코프
// var 키워드로 선언된 변수는 오로지 함수 코드 블록만을 지역스코프로 인정

//13.5 렉시컬 스코프
//렉시컬 스코프 또는 정적 스코프
//함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정되기 때문에 정적스코프라고 부른다.
//예제
var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}
foo();//1
bar(); //1

