for (let i=1;i<=20;i++){
  if(i % 3===0){
    continue
  }else if(i % 5===0){
    break
  }
  console.log(i)
}

  let sum=0;
for (let i=0;i<=100;i++){
  if (i % 2===0){
    sum+=i;
  }
}
  console.log(sum)

  for(i=1;i<=5;i++){
    let  row="";
    for(j=i;j>=1;j--){
      row=row+j+"";
    }
console.log(row)
  }