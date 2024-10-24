// 03제어문
// 03-1 블록문
{
    var foo = 10;
    console.log(foo);
}

// 03-2 조건문
// if..else 문

var num = 2;
var Kind;
 
//if 문
if(num > 0){
    Kind = '양수'; //음수를 구별할 수 없다.
}
console.log (Kind);

//if...else문
if(num > 0) {
    Kind = '양수';
} else {
    Kind = '음수';
}
console.log(Kind);

// if..else if...els 문
if(num > 0) {
    Kind = '양수';
} else if(num < 0) {
    Kind = '음수';
} 
else {
    Kind = '영';
}
console.log(Kind);

//if...else 문 - 삼항 조건 연산자
var num = 2;
var Kind;
if(num > 2) Kind = '양수';
else if(num < 0) Kind = '음수';
else  Kind = '영';
console.log(Kind);

// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수면 문자열 '홀수'를 할당한다.
var x = 4;
var result;

if(x % 2) {
    result = '짝수';
} else {
    result = '홀수 ';
}
console.log(result);

// 03-3 switch문

// 03-4 반복문
//  for문, while문, do..while문
// fot문은 중첩문을 사용할 수 있다.
// ex) 다음은 두개의 주사위를 던졌을 때 두 눈의 합이 6이 되는 모든 경우의 수를 출력
for(var i = 1 ; i <= 6 ; i++){
    for(var j = 1 ; j <= 6 ; j++) {
        if(i + j ===6)
        console.log(`${i}, ${j}`);
    }
}

// while문
// for 문은 반복횟수가 정확할때 사용, while 문은 반복횟수가 정확허지 않을때 사용

var count = 0;
// count가 3보다 작을때까지 게속 반복
while (count < 3) {   
    console.log(count);
    count++;
}