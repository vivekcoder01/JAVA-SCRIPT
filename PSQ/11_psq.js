// print the factorial of number n. [factorial of a number n is the product of all positive integer less than or equal to a given positive integer and denoted by that integer].
// Ex:- 7!(factorial of 7) = 1*2*3*4*5*6*7 = 5040;
//      5!(factorial of 5) = 1*2*3*4*5 = 120;
//      3!(factorial of 3) = 1*2*3 = 6;

let n = 5;
let factorial = 1;
for(let i=1; i<=n; i++){
    factorial *= i;

}

console.log(`factorial of ${n} is ${factorial}`)