
//calculator


function calculator(p,operation,k){
    switch(operation) {
    case "add":
    console.log (p+k);
    break;
    case "subtract":
    console.log (p-k);
    break;
    case "multiply":
    console.log(p*k);
    break;
    case "div":
    console.log(p/k);
    break;
    case "modulus":
    console.log(p%k);
    break;
    }
    
}
 calculator(88,"modulus",9);
 calculator(565,"div",56);
