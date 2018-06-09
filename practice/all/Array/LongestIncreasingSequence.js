/* Write a program that finds the length of the maximal increasing
 sequence in an array of N integers.*/
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
 const n=+gets();
 const arr=[];
 for (let i=0; i<n; i+=1) {
     arr[i]=+gets();
 }
 let count=1;
 let maxCount=0;
 for (let i=0; i<n-1; i+=1) {
     if (arr[i]<arr[i+1]) {
         count+=1;
     } else {
         if (maxCount<count) {
             maxCount=count;
         }
         count=1;
     }
}
 print(maxCount);
