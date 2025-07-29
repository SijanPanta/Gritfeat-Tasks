let n=24;
 if(n>0){
    console.log(n+" is positive");
 }else if(n<0){
    console.log(n+" is negative");
 }else{
    console.log(n+" is zero");
 }

 if(n % 2 === 0){
    console.log(n+" is divisible by 2")
 }else {console.log('not divisible by 2')}
 if(n % 3 === 0){
    console.log(n+" is divisible by 3")
 }else {console.log('not divisible by 3')}

function checkMultiples(number, array) {
    for (let i = 0; i < array.length; i++) {
        if (number % array[i] === 0) {
            console.log(`${number} is a multiple of ${array[i]}`);
            return true;
        }
    }
    console.log(`${number} is not a multiple of any numbers in the array.`);
    return false;
}
 checkMultiples(n,[2,8,3]);