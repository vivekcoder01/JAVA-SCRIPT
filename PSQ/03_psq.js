// Write a java Script program to get the first n element of an array [n can be any positive number].
// For example : for array [7,9,0,-2] & n=3. 
// Print[7,9,0]

let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(0,n);
console.log(ans);