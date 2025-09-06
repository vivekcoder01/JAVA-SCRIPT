// Write a java script Program to get the last n element of an array.[7,9,0,-2].
// For ex = For array [7,9,0,-2].
// print [9,0,-2]

let arr = [7,9,0,-2];
let n = 3;
let ans = arr.slice(arr.length-n);

console.log(ans);