//18장 함수와 일급 객체

//18.1 일급 객체
//1.런타임에 생성이 가능, 
// 2.변수나 자료구조에 저장할 수 있다. 
// 3.함수의 매개변수에 전달할 수 있다. 
// 4.함수의 반환값으로 사용할 수 있다.

//예제
//1.함수는 무명의 리터럴로 생성할 수 있다.
//2.함수는 병수에 저장할 수 있다.
//런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function(num) {
    return ++num;
};

const decrease = function(num) {
    return --num;
};

//2.함수는 객체에 저장할 수 있다.
const auxs = {increase, decrease};

//3.함수의 매개변수에 전달 할 수 있다.
//4.함수의 반환값으로 사용 할 수 있다.
function makeCounter(aux) {
    let num = 0;

    return function() {
        num = aux(num);
        return num; 
    };
}

//3. 함수는 매개변수에게 함수를 전달 할 수 있다.
const increaster = makeCounter(auxs.increase);
console.log(increaster());
console.log(increaster());
console.log(increaster());

//3.함수는 매개변수에세 함수를 전달 할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());

//일급객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 달달할 수 있다.
//함수의 반환값으로도 사용할 수 도 있다.


//18.2 함수 객체의 프로퍼티
//함수도 객체 
//console.dir -> 메서드를 사용하여 함수 객체의 내부

//예제
function square(number){
    return number * number;
}
console.dir(square);// 메서드를 사용해서 함수 객체 내부를 확인

console.log(Object.getOwnPropertyDescriptors(square));
// arguments: {value: null, writable: false, enumerable: false, configurable: false}
// caller: {value: null, writable: false, enumerable: false, configurable: false}
// length: {value: 1, writable: false, enumerable: false, configurable: true}
// name: {value: 'square', writable: false, enumerable: false, configurable: true}
// prototype: {value: {…}, writable: true, enumerable: false, configurable: false}

// __proto__ 는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); //undefined 

// __proto__ 는 Object.protoype 객체의 접근자 프로퍼티다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));


//18.2.1 arguments 프로퍼티
//ES3부터 표준에서 폐지
//arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체
//함수 내부에서 지역변수처럼 사용 됨, 함수 외부에서는 참조 할 수 없다.

//예제
function multiply(x, y){
    console.log(arguments);
    return x * y;
}

console.log(multiply()); //NaN
console.log(multiply(1)); //NaN
console.log(multiply(1, 3)); //3
console.log(multiply(1, 3, 5)); //3 -> 초과된 인수는 무시된다. 인수가 버려지는 것이 아니라 암묵적으로 프로퍼티에 보관된다.

//자바스트립트는 인수의 개수를 확인하지않는 특성을 가지고 있다.
//함수가 호출되면 인수 개수를 확인하고 함수의 동작을 달리 설정할 수 있다.
//이때 사용하는 것이 arguments 객체
//auguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할때 유용하다.

//예제
function sum() {
    let res = 0;

    //argument 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회 할 수 있다.
    //유사배열 객체란 length 프로퍼티를 가진 객체로 for 문으로 순회할 수 있는 객체를 말한다.
    //유사배열 객체는 배열이 아니다.
    for(let i = 0; i < arguments.length ; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());//0
console.log(sum(1, 2)); //3
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //6


//18.2.3 length 프로퍼티


