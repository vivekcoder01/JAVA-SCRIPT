// Write a java script function that accepts a list of country names as input and returns the longest country names as output

// Ex :- Country = ["Australia", "Germany", "United states of America"]
//       output : United states of Amirca

let countary =["Australlia","Germany" ,"United States Of Amirica "];

function longestName(countary){
let ansIdx = 0;

for(let i=0; i<countary.length; i++){
    let ansLen = countary[ansIdx].length;
    let currLen = countary[i].length;
    if(currLen>ansLen){
        ansIdx = i;
    }
}
return countary[ansIdx];
}
longestName(countary);
