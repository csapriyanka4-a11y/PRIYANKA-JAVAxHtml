
// calculator using ternary operator

function addition(t,k){
    return (t+k);
}
function multiplication(t,k){
   return (t*k); 
}
function subtraction(t,k){
    return (t-k);
}
function div(t,k){
    if(k===0){
    console.log("Number is not divisible by zero");
    return(t/k);
    }
}
function modulus(t,k){
    return(t%k);
}
function expo(t,k){
    return(t**k);

}
function calculator(t,operat,k) {
     return (operat=="+") ? addition(t,k): (operat=="-") ? subtraction(t,k):
          (operat=="*") ? multiplication(t,k): "invalid operator" ;
}
console.log("multiplication=",calculator(89,"*",23))