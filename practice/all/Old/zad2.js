function solve(args){
const rows=+args[3];
let arr=[+args[0],+args[1],+args[2]];

let res=[];
let length=(rows*(rows+1))/2|0;
for(let i=3;i<length;i+=1){
arr[i]=arr[i-1]+arr[i-2]+arr[i-3];
}
 
    let i=0;
    let k=1;
    for(let j=1;j<=rows;j+=1){
        
        res=arr.slice(i,k);
        i=k;
        k=k+j+1;
    
    console.log(res.join(' '));
}
//}


}

solve([1, 
    4, 
    2, 
    3]);