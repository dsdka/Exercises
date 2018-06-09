/* Write a program that enters from the console a positive integer n and 
prints all the numbers from 1 to N inclusive, on a single line, separated by
 a whitespace.*/
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
 const n=+gets();
 const arr=[];
 for (let i=1; i<=n; i+=1) {
     arr.push(i);
 }
 print(arr.join(' '));
 //quit(0);