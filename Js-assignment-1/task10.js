function outer(x) {
    console.log("outer is called with x =", x);

    return function inner(y) {
        return x + y;
    };
}

const add10 = outer(10);  // outer is done executing here

console.log(add10(5));    // inner still remembers x = 10 → 15
console.log(add10(20));   // inner still remembers x = 10 → 30
