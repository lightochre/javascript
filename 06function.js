// 06 함수
// 코드의 재활용이 가능하다

// 06.01 함수리터럴
//  예제
// 변수에 함수 리터럴을 할당
// var f = function add (x, y){
//     return x + y;
// }

// 12.4 함수정의
// 12.4.1 함수표현식

// 예제
// var add = function add(x, y){
var add = function (x, y){ // 함수표현식으로 표현하면..
    return x + y;
}
console.dir(add); //console.dir 는 함수 객체의 프로퍼티까지 출력된다.
console.log(add(2, 6));//함수 호출

// 12.4.5 화살표함수
// function 키워드 대신 =>[화살표]를 사용하는 방법

// 예제
const _add = (x, y) => x + y ;
console.log(_add(3, 9)); 

// 12.5 함수호출
// 12.5.4 반환문
// return 키워드를 이용해 함수 외부로 반환할수 있다.
// 함수 호출은 표현식이다.
// 반환문은 함수 실행을 중단하고 함수 몸체를 빠져나간다. 반환된 후에는 다른문이 존재해도 실행되지 않는다.
// 반환문은 return 키워드 뒤에 오는 표현식을 평가에 반환한다. 반환값이 없으면 undefined가 반환된다.

// 예제
function multiply(x, y){
    return x * y; //반환문
}

var result = multiply(5, 2);//함수 호출은 반환값으로 평가된다.함수 호출은 표현식이다.
console.log (result);

// 예제
// 반환문은 return 키워드 뒤에 오는 표현식을 평가에 반환한다. 반환값이 없으면 undefined가 반환된다.
function foo(){
    return;
}
console.log(foo()); //반환값이 없으면 undefiend가 반환된다.

// 12.6 참조의 의한 전달과 외부 상태의 변경
// 예제
// 매개변수 primitive는 원시값을 전달받고, 매개변수 obj는 객체를 전달한다.
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}
// 외부상태
var num = 100; 

// 12.7 다양한 함수의 호출
// 12.7.2 재귀함수
// 함수가 자기 자신을 호출하는 것, 반복되는 처리를 위해 사용

//12.7.3 중첩함수
//함수 내부에 정의된 함수
//자신을 포함하는 외부 함수를 돕는 헬퍼함수의 역활은 한다.

//예제
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log( x + y);
    }
    inner();
}
outer();

//12.7.4 콜백함수
// 어떤일을 반복 수행하는 함수
//함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백함수

//예제
//n만큼 어떤일을 반복한다.
function repeat(n){
    //i를 출력한다
    for(var i = 0;i < n ; i++)
        console.log(i);
}
repeat(5);

//n 만큼 어떤일을 반복한다.
function repeat2(n) {
    for(var i = 0 ; i < n ; i++ ){
        //i가 홀수 일때만 출력한다.
        if(i % 2) console.log(i);
    }
}
repeat2(9);

//공통적은 함수, 즉 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수외부에서 함수내부로 전달하는 것이다.

//예제
//외부에서 전달받은 f를 n만큼 반복 호출한다
function repeat3(n, f) {
    for(var i = 0 ; i < n ; i++){
        f(i); //i 전달 받으면서 f를 호출
    }
}

var logAll = function(i){
    console.log(i);
}
//반복 호출할 함수를 인수로 전달한다.
repeat3(5 , logAll);

var logOdds = function(i) {
    if(i % 2)
    console.log(i);
}
//반복 호출할 함수를 인수로 전달한다.
repeat3(3, logOdds);