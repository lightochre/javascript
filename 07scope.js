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