let OP="BITWISE OPERATOR"
let a=18; //10010
let b=19; //10011
console.log(OP)
// BITWISE AND OPERATOR
// output ((10010 $ 10011) = 18)
console.log(18 & 19);
// BITWISE OR OPERATOR
 let c=22; //10110
 let d=20; //10100
 // output (10110 | 10100=22)
 console.log(c|d);
 
 //BITWISE NOT OPERATOR
 let m=11; //1011
 // output 1011=1100
 console.log(~11);

 let n=12;
 // output (~1100=-13 (10001))
 console.log(~12);

 // Bitwise not operator
 let k=-15; //1111
 // output 1111= 14 (1110)
 console.log(~-15);

 let l=-9;  //1001
 // output 1001= 8 (1000)a
 console.log(~-9);

 // Bitwise XOR OPERATORS
 let g=23; //10111
 let h=24; //11000
 //output (10111 ^ 11000=1111)
 console.log(g^h);

 //Bitwise left Shift operator
 let p=27; //11011
 // output 00000000000000000000000000011011=27
 //        00000000000000000000000011011000=216
 // output 1101100=216
 console.log(27<<3);

 //Right shift operator
 let o=7; //111
 //output 111=1
 console.log(7>>2);

 //Unsigned right operator
 let s=16; //10000
 //output 00000000000000000000000000010000
 //       11111111111111111111111111101111
 console.log(16>>>2);