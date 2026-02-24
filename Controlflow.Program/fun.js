
//CALCULATOR

function addition(p,q){
    return p+q;
}
function subtraction(p,q){
    return p-q;
}
function multiplication(p,q){
    return p*q;
}
function division(p,q){
    if(q===0){
    return "number is not divided by zero";
    }
    return p/q; 
}
function expo(p,q){
    return p**q;
}
function Modulus(p,q){
    return p%q;
}  

function calculator(p, operator, q){
switch(operator) {
case "+":
return addition(p,q);
case "-":
return subtraction(p,q);
case "*":
return multiplication(p,q);
case "**":
return expo(p,q);
case "/":
return (p/q);
case "%":
return Modulus(p,q);
 }

}
console.log("addition=",calculator(5623,"+",5623));
console.log("subtraction=", calculator(5623,"-",5623));
console.log("multiplication=", calculator(5623,"*",25));
console.log("division=", calculator(5623,"/",5));
console.log("expo=",calculator(5623,"**",2));
console.log("Modulus=", calculator(5623,"%",6));