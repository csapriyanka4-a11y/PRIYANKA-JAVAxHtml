
// Abstraction means hiding complex implemnetations details and showing only essential
// features to the user.


class lock{
    constructor(p1){
        if(new.target===lock){
            console.log("Don't touch my phone");
        
    }else{
        this.private=p1;
     }
    }
}
    class personal extends lock{
        constructor(a1,a2){
            super(a1)
            this.passkey=a2;
        }
    }
    const Piu=new lock("phone");
    console.log(Piu);
    const P=new personal("Phone","pk121");
    console.log(P);