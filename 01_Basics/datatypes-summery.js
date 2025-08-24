// data types :- Mainly Divided Into Two Types 
// 1.Primitive Data Types 
// 2.Non-Premittive Data Types 

// Primitive data Types are divided into 7 Types : String ,Number, Boolean , Null, Undefined ,Symbol, BigInt

// java script is dynamically Typed Language 



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Reference Data Type or Non-Premitive Data Type : Arrays , Objects , Functions

const heros = ["shaktiman", "realman ", "Vivek ji "]
let myObj = {
    name: "vivek",
    age : 19
}
       
const myFun = function(){
console.log("hello World");
}