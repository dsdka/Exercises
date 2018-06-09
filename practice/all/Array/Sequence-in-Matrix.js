/* We are given a matrix of strings of size N x M. Sequences in the matrix
we define as sets of several neighbour elements located on the same line,
 column or diagonal. Write a program that finds the longest sequence of equal
 strings in the matrix and prints its length.*/
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
 const nm=gets().split(' ').map(Number);
 const n=nm[0];
 const m=nm[1];
 const arr = [];
 for (let i=0; i<n; i+=1) {
     arr[i] = gets().split.map(Number);
 }
 let count1 = 1;
 let count2 = 1;
 let maxCount=0;
 for (let i=0; i<n; i+=1) {
     for (let j=0; j<m-1; j+=1) {
         if (arr[i][j]===arr[i][j+1])
     }
 }
