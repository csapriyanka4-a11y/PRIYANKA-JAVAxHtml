// Polymosrphism is the ability of different objects to responds to the 
// same method or property in different ways.
// same class, different works.

class animal {
    sound(){
        console.log("animal sound");
    }
}
 class dog{
    sound(){
        console.log("dog bark");
    }
 }
 class cat{
    sound(){
        console.log("meow meow");
    }
 }
 let animal1=new animal();
 let dog1=new dog();
 let cat1=new cat();
 animal1.sound();
 dog1.sound();
 cat1.sound();
 console.log(dog);

 //POLYMORPHISM

 class vehicle {
    sound(){
        console.log("vehicle sound");
    }
}
 class bike{
    sound(){
        console.log("vroom vroom");
    }
 }
 class bullet{
    sound(){
        console.log("fat fat fat");
    }
 }
 let vehicle1=new vehicle();
 let bike1=new bike();
 let bullet1=new bullet();
 vehicle1.sound();
 bike1.sound();
 bullet1.sound();
 console.log(bullet,bike,);
 
 //Polymorphism

 class University{
    work(){
        console.log("University is for education ");
    }
 }
 class facuilty extends University{
    work(){
        console.log("Facuilty is works for group of academics ");
    }
 }
 class professor extends University{
    work(){
       console.log("Professor works as a lecturer");
    }
 }
 class peon extends University{
    work(){
        console.log("Serves tea ");
    }
 }
 let u1=new University();
 let f1=new facuilty();
 let p1=new professor();
 let pe1=new peon();
 
 console.log(University);
 console.log(u1.work());
 console.log(f1.work());
 console.log(p1.work());
 console.log(pe1.work());