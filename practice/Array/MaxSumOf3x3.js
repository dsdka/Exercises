/* Write a program that reads a rectangular matrix of size N x M
and finds in it the square 3 x 3 that has maximal sum of its elements.
 Print that sum.*/
 const gets = this.gets || require('readline-sync').question;
 const print = this.print || console.log;
const num = gets();
const nm=num.split(' ');
const n=+nm[0];
const m = +nm[1];
const arr = [];
print(n);
print(m);

for ( let i=0; i<n; i+=1) {
    const inp=gets();
    const input = inp.split(' ').map(Number);
    arr[i]=input;
}

let maxSum=-10000;
for (let i=0; i<n-2; i+=1) {
    for (let j=0; j<m-2; j+=1) {
       const sum=arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j]+arr[i+1][j+1]+arr[i+1][j+2]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];

        if (maxSum<sum) {
            maxSum=sum;
        }
    }
}
print(maxSum);
quit(0);
