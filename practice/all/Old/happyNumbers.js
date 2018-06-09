
for(let i=1;i<10;i+=1){
    for(let j=0;j<10;j+=1){
        for(let k=0;k<10;k+=1){
           let n=i+j-k;
            if(n>=0 && n<10){
                console.log(`${i}${j}${k}${n}`);
            }
        }
    }
}