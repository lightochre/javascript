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

//3.Constants - 값을 선언함과 동시에 변경할수 없다.
//favor immutable data type always for a few reasons;
// - securify [보안]
// -thread safety
// -reduce human mistakes

//4.variable types
//primitive, sigile item : number, string, boolean, null, underfiden, symbol
//object, box container
//function, first-class function

const count = 17; //integer- 정수
const size = 17.1; //decimal number - 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);