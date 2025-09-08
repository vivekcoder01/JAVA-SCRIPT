// Create a function that prints the multiplication table of a number

function multiplicationTable(n){
    for(let i=n; i<=n*10; i=i+n){
        console.log(i)
    }
}

multiplicationTable(5);