// write a js program to find the no of digits  in a number 
// ex- If number  = 287152.   count = 6

let number = 287152;
let count = 5;
let copy = number;

while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);