//Write a java script program to check if an element exists in an array or not 

let arr = ["hello", 'a', 23,64,99,-6];

let item = 64;
if(arr.indexOf(item) !=-1){
    console.log("element exist in array");
}
else{
    console.log("elemrnt does not exist in array")
}