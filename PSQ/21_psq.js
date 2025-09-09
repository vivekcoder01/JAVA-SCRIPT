//Write an arrow function named array Average that accepts an array numbers & returns the average of the numbers

const arrayAverage = (arr) =>{
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total / arr.length;

}

 let arr = [1,2,3,4,5,6];
 console.log(arrayAverage(arr))