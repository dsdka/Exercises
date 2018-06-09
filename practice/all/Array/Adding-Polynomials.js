/* Write a method that adds two polynomials. Represent them as arrays of their
 coefficients. Write a program that reads two polynomials and prints their sum */
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
 const n=+gets();
 const arr1=gets().split(' ').map(Number);
 const arr2=gets().split(' ').map(Number);
 const arr = [];
 for (let i=0; i<n; i+=1) {
    arr[i]=arr1[i]+arr2[i];
 }
 print(arr.join(' '));
 quit(0);
