function Candidate(name1,address1,id1,age1){
    this.name=name1;
    this.address=address1;
    this.id=id1;
    this.age=age1;
}
const Priyanka=new Candidate("Priyanka","Jharkhand",243,22);
const Pritha=new Candidate("Pritha","Bihar",123,23);
const Ragini=new Candidate("Ragini","Bihar",456,12);
console.log(Priyanka);
console.log(Priyanka.name, Priyanka.address, Priyanka.age);
console.log(Pritha);
console.log(Pritha.age, Priyanka.age, Ragini.age);
console.log(Priyanka.address, Pritha.address, Ragini.address);
console.log(Priyanka.id, Pritha.id, Ragini.id);


// CONSTRUCTOR
function Bookhub(bname1,authorname1,price1,rating1){
         this.bname=bname1;
         this.authorname=authorname1;
         this.price=price1;
         this.rating=rating1;
}
const Godan=new Bookhub("Godan","Premchand",150,10);
const Musafir=new Bookhub("Musafir","DivyaPrakashDubey",162,10 );
const TwoStates=new Bookhub("TwoStates","Chetan Bhagat",154,9);
const HalfGirlfriend=new Bookhub("HalfGirlfriend","Chetan Bhagat",156,8);
const Khidki=new Bookhub("Khidki","Divya Prakash Dubey",123,6);

console.log(Godan);
console.log(Godan.authorname,Musafir.authorname,TwoStates.authorname,HalfGirlfriend.authorname);
console.log(Khidki.price,Godan.price);
