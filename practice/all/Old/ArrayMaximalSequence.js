//Write a program that finds the length of the maximal sequence of equal
// elements in an array of N integers.

function solve(args){
const n=+args[0];
const arr=args.map(Number);
arr.shift();
let count=1;
let maxCount=0;
for(let i=0;i<n;i+=1){
    if(arr[i]===arr[i+1]){
        count++;
    }
    else{
        if(maxCount<count){
            maxCount=count;

        }
        count=1;
    }
}
console.log(maxCount);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);