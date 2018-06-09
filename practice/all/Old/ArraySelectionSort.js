//Sorting an array means to arrange its elements in increasing order.
// Write a program to sort an array. Use the Selection sort algorithm:
// Find the smallest element, move it at the first position,
// find the smallest from the rest, move it at the second position, 
//etc.
function solve(args){
const arr=args.map(Number);
const n=arr.shift();
let ind;
let el;
for(let i=0;i<n-1;i+=1){
    el=arr[i];
 for(let j=i;j<n;j+=1){
     

     if(arr[j]<=el){
         el=arr[j];
         ind=j;
     }
     

 }
 arr[ind]=arr[i];
 arr[i]=el;
 
}
console.log(arr.join('\n'));
}
solve(['6', '3', '4', '1', '5', '2', '6']);