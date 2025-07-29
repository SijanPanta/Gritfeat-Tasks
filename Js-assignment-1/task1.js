
var a=10;
let b=20;
const pi=3.14
console.log(a,b,pi);// 10 20 3.14

const block=()=>{
    var block_a=20
    let block_b=30
    const block_pi =3.145

    block_b=35  
     block_pi=3.14 // TypeError: Assignment to constant variable.
console.log(block_a,block_b,block_pi) //20 35 3.145
}
block();

const hoistingFunction=()=>{
    x=5
    var x;
    console.log(x);// 5

    y=10
    let y;
    console.log(y)//Uncaught ReferenceError: Cannot access 'y' before initialization

    z=20
    //const z; 'const' declarations must be initialized.
    console.log(z)
}
hoistingFunction();


