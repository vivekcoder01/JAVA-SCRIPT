// Create a function that returns the sum of number from 1 to 100.


function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;

    }
    return sum;
}

getSum(5);