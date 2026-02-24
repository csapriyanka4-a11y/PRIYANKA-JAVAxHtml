
//Inheritance is a mechanism that allows one class to inherit properties and methods
//from another class.
//It enables code reusability and establishes a parent-child relationship between classes.


class Institute{
    constructor(name,age){
     this.name=name;
     this.age=age;
    }
}
class trainee extends Institute {
    constructor(name,age, branch) {
        super(name);
        this.branch=branch;
        this.age=age;
        
    }
}
const t1=new trainee ("Priyu",22,"CSA");
console.log(t1);
console.log(t1.name);
console.log(t1.age);
console.log(t1.branch);

//I2

class Hills{
    constructor(address,cost){
        this.address=address;
        this.cost=cost;
    }
}
class tourist extends Hills {
    constructor(address,cost,site){
     super(site)
     this.address=address;
     this.cost=cost;

    }
}
console.log(priyu)
