function solve(args){
let arr=args[0].split(' ');
let h=[];
let sum;
let res=0;
for(let i=0;i<arr.length-1;i+=1){
    sum=sumEl(arr[i],arr[i+1]);
    h[i]=sum;
    if(sum%2===0){
        i+=1;
        h[i]=0;
    }
}
for(let i=0;i<h.length;i+=1){
    if(h[i]===0){
        res+=h[i-1];
    }
}
console.log(res);
function sumEl(a,b){
    let k=Math.max(a,b);
    let m=Math.min(a,b);
    let res=k-m;
    return res;
}
}
solve(['1 6 8 10 3 1 1']);