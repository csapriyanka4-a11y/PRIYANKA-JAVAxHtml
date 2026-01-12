var a=20;
function test() {
    console.log(a);
}
test(); // 20
console.log(a); // 20

function test() {
    var b=30;
    console.log(b);
}
test(); // 30
console.log(b); // 


function test() {
    if (true) {
        let d=80;
    }
    console.log(d);
}
test();

function test() {
    if (true) {
        let d=80;
    }
    console.log(d);
}
test();


