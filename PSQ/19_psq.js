//Write a javascript function to count the number of vowels in a string argument

let str = "Vivek Chaurasiya";

function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(
            str.length(i) == "a" ||
            str.length(i) == "e" ||
            str.length(i) == "i" ||
            str.length(i) == "o" ||
            str.length(i) == "u" 
        ){
            count++;
        }
    }
    return count;

}