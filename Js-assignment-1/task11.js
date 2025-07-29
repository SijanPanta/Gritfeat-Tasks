const factorial=(n)=>{
    if (isNaN(n)||n<0){
       return("invalid inputs")
    }
  if (n===0||n===1){return 1}
        return n*factorial(n-1);
    
}

console.log(factorial(8))