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
l