//write a javascript function to extract unique characters from a string 

// Example:- str ="abcdabcdefgggh"
       //    ans ="abcdefgh" 

       let str = "abcdabcdefgggh";

       function getUnique(str){
        let ans="";

        for(let i=0; i<str.length; i++){
            let currChar = str[i];

            if(ans.indexOf(currChar) == -1){
                ans += currChar;
            }
        }
        return ans;
       }
       getUnique(str);