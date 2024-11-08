//15 let, const 키워드와 블록레벨 스코프
//15.1 var  키워드로 선언한 변수의 문제점
//15.1.1 변수중복 선언 허용

//예제
var x = 1;
var y = 1;

//var 키워드로 선언된 변수는 같은 스코프 내에서 중복선언 허용
//초기화된 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는것처럼.. 
var x = 10;

//초기화문이 없는 변수 선언문은 무시된다.
var y;
console.log(x);
console.log(y);

//15.2 let 키워드
//15.2.1 변수 중복선언 금지
//let 키워드로 이름이 같은 변수를 중복선언하면 문법에러[SyntaxError]가 발생한다.

//15.2.2 블록레벨 스코프
//var 키워드로 선언한 변수는 오로지 함수의 코드블록만 인정- 지역스코프(함수레벨스코프)
//let 키워드로 선언한 변수는 모든 코드블록을 지역스코프로 인정 - 블록레벨스코프
//모든 코드 블록 - function, if, for,white,try/catch 등

//예제 -블록 레벨 스코프
let foo = 1; //전역변수
{
    let foo = 2; //지역변수
    let bar = 3; //지역변수
}
console.log(foo);
//console.log(bar); //referenceError

//예제 - 블록 레벨스코프
//전역스코프
let i = 10 ; 
//함수레벨스코프
function foo1() {
    let i = 100;
    //블록레벨스코프
    for(let i = 1 ; i < 5 ; i++){
        console.log(i);
    }
    console.log(i);
}
foo1();
console.log(i);


//15.2.3 변수 호이스팅

//예제
//var 키워드로 선언한 변수는 런타임 이전에 선언단계와 초기화단계가 실행된다.
//따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo3);

var foo3;
console.log(foo3);

foo3 = 1;//할당문에서 할당 단계가 실행된다.
console.log(foo3);

//let 키워드로 선언한 변수는 '선언단계'와 '초기화단계'가 분리되어 진행된다.