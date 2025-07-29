const sumOfNum=(array)=>{
  let sum=0;
for(let i=0;i<array.length;i++){
  if(array[i]>10){
    sum+=array[i]
  }
}
console.log(sum)
console.log(sum/array.length)
}

sumOfNum([23,2,24,11,12]);