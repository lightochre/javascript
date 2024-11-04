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

