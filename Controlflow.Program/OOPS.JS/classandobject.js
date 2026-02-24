// class and object

class candidate{
    constructor(p1,p2,p3,p4){
        this.name=p1;
        this.age=p2;
        this.address=p3;
        this.mobile=p4;
    }
}
const ck=new candidate("PK",22,"JHARKHAND",7779996756);
const jk=new candidate("Rita",23,"Bihar",1235678910);
console.log(ck);
console.log(jk);
console.log(ck.name,ck.age,ck.address);
console.log(jk.name,jk.age,jk.mobile);

//class and object
class mobile{
    constructor(a1,a2,a3){
     this.mname=a1;
     this.company=a2;
     this.price=a3;
    }  
}
const mk=new mobile("Keypad","Samsung",2400);
const ml=new mobile("Screentouch","Realme",25000);
console.log(mk);
console.log(ml);
console.log(mk.mname,mk.company,mk.price);
console.log(ml.mname,ml.company,ml.price);


// creating an instance
const candidate1=new candidate("Raja",24,"JH",8210181226);
const c2=new candidate("Riya",)
console.log(candidate1.name);
console.log(candidate1.age);
console.log(candidate1.mobile);