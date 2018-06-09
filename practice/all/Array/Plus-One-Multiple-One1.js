/* We are given the following sequence:

S1 = N;
S2 = S1 + 1;
S3 = 2*S1 + 1;
S4 = S1 + 2;
S5 = S2 + 1;
S6 = 2*S2 + 1;
S7 = S2 + 2;
Your task is to write a program, that by given N and M, 
finds the Mth member of the sequence*/
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const nm=gets().split(' ').map(Number);
const n=nm[0];
const m=nm[1];
const arr = [];
arr[0]=n;
for (let i=1; i<m; i+=2) {
    arr[i]=n+1;
    arr[i+1]=2*n+1;
    arr[i+2]=n+2;
    n=arr[i];
}
print(arr[m-1]);
quit(0);