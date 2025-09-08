// Create a function that returns the concatination of all strings inn array 

let str = ["Hello","hii","bye","!"];

function concat(){
    let result = "";
    for(let i=0; i<=str.length; i++){
        result += str[i];
    }
    return result;
}
concat(str);