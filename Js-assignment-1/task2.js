let a=true;
console.log('a is',typeof(a));
let b=10;
console.log('b is',typeof(b));
let c="sijan"
console.log('c is',typeof(c));
let d={name:"sijan",
    age:"20"}
    console.log('d is',typeof(d));
let e=""
console.log('e is',typeof(e));
let f;
console.log('f is',typeof(f));
let g=Symbol(a)
console.log('g is ',typeof(g));
let h=293423243423878968998687678676787678689999999n 
console.log('h is',typeof(h));

// Declare a variable with NaN
let myVar = NaN;

console.log("Value of myVar:", myVar);

let result1 = myVar + 5;
console.log("NaN + 5 =", result1); // NaN

let result2 = myVar + "hello";
console.log('NaN + "hello" =', result2); // "NaNhello"


let result3 = myVar + true;
console.log("NaN + true =", result3); // NaN


let result4 = myVar + null;
console.log("NaN + null =", result4); // NaN


let result5 = myVar + undefined;
console.log("NaN + undefined =", result5); // NaN

// Check NaN equality and detection
console.log("NaN === NaN:", NaN === NaN);           // false
console.log("isNaN(NaN):", isNaN(NaN));             // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true
console.log('Number.isNaN("NaN"):', Number.isNaN("NaN")); // false


let str = "10";
let num = 5;
console.log('"10" + 5 =', str + num);  // "105" (number is converted to string and concatenated)


let boolTrue = true; // becomes 1
let boolFalse = false; // becomes 0
console.log("5 + true =", 5 + boolTrue);   // 6
console.log("5 + false =", 5 + boolFalse); // 5

console.log('"hello" + true =', "hello" + true); // "hellotrue" (boolean becomes string)

console.log('"2" * 3 =', "2" * 3); // 6 (string is converted to number)

console.log('"10" - 4 =', "10" - 4); // 6 (string is converted to number)

console.log('false + "test" =', false + "test"); // "falsetest" (boolean becomes string)

console.log("null + 1 =", null + 1); // 1 (null becomes 0)

console.log("undefined + 1 =", undefined + 1); // NaN

console.log("null == undefined:", null == undefined); // true (loose equality allows coercion)

console.log("null === undefined:", null === undefined); // false (strict equality doesn't coerce)
