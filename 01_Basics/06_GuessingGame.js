// User enters a max number & then tries to guess a random geerated number between 1 to max.

// random generated 

const max = promt("Enter the max number");
console.log(max);

let random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("gusses the number ");

while(true){
    if(gusses == "quit"){
        console.log("user quit");
        break;
    }
    else if(guess == random){
        console.log("You are right congurates!!");
        break;
    }
    else{
        guess == prompt("your guess was wrong please try again");
    }
}