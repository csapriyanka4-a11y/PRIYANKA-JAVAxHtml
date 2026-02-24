// Encapsulation is the bundling of data properties and functions that operate on 
// that data within a single unit(object/class) while restricting direct access to some of the 
// object components.

class cardetails{
    #name; //private variable declaration
    
    constructor(name, company){
        this.#name=name;
        this.company=company;
        

    }
 getcardetails(){
    return this.name=this.#name;};};
    let cardetails1=new cardetails("THAR","Mahindra");
    console.log(cardetails1.getcardetails());

// Encapsulation

 class goodsinfo{
    #price; //private variable declaration
    #comapany;
    constructor(iname,price,company){
        this.#price=price;
        this.iname=iname;
        this.company=company;
    }
    getgoodsinfo(){
        return this.price=this.#price;};};
        let goodsinfo1=new goodsinfo(45000,"laptops","DELL");
        console.log(goodsinfo1.getgoodsinfo());


// Encapsulation
  
class voting{
    #voterid; // private  varaible declaration
    #age;
    constructor(cname,voterid,age){
        this.#voterid=voterid;
        this.name=cname;
        this.#age=age;
    }
    getvoting(){
        return this.age=this.#age;};};
        let voting1=new voting("Priyanka","cjy123",22);
        console.log(voting1.getvoting());
    
    
//Encapsulation

class access{
    #mobile; 
    #name;
    constructor(name,mobile,email){
        this.#mobile=mobile;
        this.#name=name;
        this.email=email;
    }
getaccess(){
    return  `${this.#mobile}.${this.email}`;
    
}
set(p){
    this.email=p;
}
}
const pk=new access("Pritha",123456794,"pqr@gmail.com");
console.log(access);
console.log(pk.email);
console.log(pk.getaccess());

pk.set("Okay@gmail.com");
console.log(pk.getaccess());
    
//Encapsulation
class Language{
    #java;
    #javascript;
    constructor(l1,l2,l3,l4){
        this.#java=l1;
        this.#javascript=l2;
        this.python=l3;
        this.php=l4;
    }
getlanguage(){
    return `${this.#java}.${this.javascript}`;
}
set(m1){
    this.
}
}

