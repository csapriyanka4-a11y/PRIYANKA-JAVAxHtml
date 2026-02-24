
function prime(number){
  if (number<=50){
    console.log("The number is prime");
  }
  else 
    console.log ("The number is not prime");
 }
  prime(7);


  //
  let number=11;
   switch(number){
    case 0:
    console.log("number is prime");
    break ;
    case 1:
    console.log("number is not prime");
   }
  
// For prime number

let a=19
if(2<=a**0.5){
    if(a%2==0){
        console.log("Number is prime");
    }
    else {
        console.log("number is not prime");
    }
}

let b=17;
let count=0;
for(let i=1;i<=b; i++){
    if(b% i===0){
        count++;
    }
}
if (count===2){
    console.log("number is prime");
}
 else{
    console.log("number is not prime");
 }

 //
 function pRime(c) {
 let i;
 for (i=2; i<=c; i++){
    if(c%i===0){
        return("number is not prime");
        break;

    } else {
        return("number is prime");
        break;
    }
 }}
 console.log(pRime(2134));