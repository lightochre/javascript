// 02.연산자[Operrator]

// 02-1산술연산자
//이항산술연사자 - 피연산자를 산술하여 숫자 값을 만든다.
var a = 5;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);//나머지

// 단항연산자 - 증가/감소 연산자 
var x = 1;

x++; //x = x + 1
console.log(x); //2

x-- //x = x -1
console.log(x);

// 02-2 할당연산자
// 우항에 히는 피연산자의 평가결과를 좌항에 있는 변수에 할당
// 좌항의 변수에 값을 할당하므로 값이 변한다.
var x;
x =10;
console.log(x);

x += 5; //x= x +5
console.log(x);

x -= 5; //x = x -5
console.log(x);

x *= 5;
console.log(x);

x /= 5; 
console.log(x);

var str = 'My name is'
str += 'Lee'; // str = str + 'Lee'
console.log(str);

// 연쇄할당, 오른쪽에서 환쪽으로 진행.
var a, b, c; 
a = b = c = 0;
console.log(a, b, c);


//  02-3 동등연산자
// 02-4 삼항 조건 연산자 
// 조건식 ? 조건식이 true일때 반환값 : 조건식이 false 일 때 반환 값

var x = 2;
var result = x % 2 ? '홀수' : '짝수';
console.log('result'); 

// 02-4 논리연산자
// || -> or, && -> and , ! -> 부정(not)

// 논리합(||) 연산자
console.log(true || true); //true 
console.log(true || false); //true 
console.log(false || false); //false
console.log(false || false); //false

//논리곱(&&) 연산자
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false
console.log(false && true); //false

//논리 부정(!) 연산자
console.log(!true);

//단축평가
console.log('Dog' && 'Cat'); //cat