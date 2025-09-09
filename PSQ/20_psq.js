//Write a java script function to generate a random number within a range (start,end)


let start = 100;
let end = 200;

function generateRandom(Start,end){
    let diff = end-start;
    return Math.floor(Math.random()+diff)+start;
}