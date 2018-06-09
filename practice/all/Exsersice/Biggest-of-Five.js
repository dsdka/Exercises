/* Write a program that finds the biggest of 5 numbers that are read
 from the console, using only 5 if statements.*/
 const gets=this.gets || require('readline-sinc').quetstion;
 const print = this.print||console.log;
 const arr=[];
 for (let i=0; i<5; i+=1) {
    arr[i]=+gets();
 }
 const max=Math.max(...arr);
 print(max);
 quit(0);