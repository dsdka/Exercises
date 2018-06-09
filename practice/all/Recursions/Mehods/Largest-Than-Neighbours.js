/* Write a method that checks if the element at given position in given array
 of integers is larger than its two neighbours (when such exist). 
 Write program that reads an array of numbers and prints how many of 
 them are larger than their neighbours. */
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
 const LargestThanNeighbours = (arr, l) => {
     let count = 0;
     for (let i=1; i<l-2; i+=1) {
        if (arr[i]>arr[i-1] && arr[i]>arr[i+1]) {
            count+=1;
        } else {
            continue;
        }
     }
     return count;
 };

 const n=+gets();
 const array = gets().split(' ').map(Number);
 const res = LargestThanNeighbours(array, n);
 print(res);

