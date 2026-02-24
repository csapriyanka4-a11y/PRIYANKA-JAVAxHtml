
//Program for calculator

function calculator(p,operator,q){
   if(operator=="+"){
    return p+q;
   }
   else if (operator =="-"){
    return p-q;
   }
   else if (operator =="*"){
    return p*q;
   }
   else if (operator =="**"){
    return p**q;
   }
   else if(operator =="/"){
      if(q===o){
      return "number is not divisible by zero";
      }
    return p/q;
   }
   else if(operator =="%"){
   return p%q;
   }
   return "Provide valid output";
   
}
console.log("OUTPUTS:")   
console.log(66-9);
   console.log(5684+3);
   console.log(564*25);
   console.log(6458/3);
   console.log(6345%6);