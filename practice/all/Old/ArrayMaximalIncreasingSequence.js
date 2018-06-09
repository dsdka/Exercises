//Write a program that finds the length of the maximal increasing
// sequence in an array of N integers.

function solve(args){
const n=+args[0];
const arr=args.map(Number);
arr.shift();
let count=1;
let maxCount=0;



for(let i=0;i<n-1;i+=1){
    if(arr[i]<arr[i+1]){
        count+=1;
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
solve(['8', '2', '3', '2', '3', '4', '5', '2', '4']);