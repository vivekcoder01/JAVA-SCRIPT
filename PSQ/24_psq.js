//What is the output of the following code 

let length =4;
function callBack(){
    console.log(this.length);
}

const object ={
    length :5,
    method(callBack){
        callBack();
    }
}
object.method(callBack,1,2);