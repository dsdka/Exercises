/* Write a method that adds two positive integer numbers represented as
arrays of digits (each array element arr[i] contains a digit; the last
    digit is kept in arr[0]). Write a program that reads two arrays
    representing positive integers and outputs their sum. */
    const gets = this.gets || require('readline-sync').question;
    const print = this.print || console.log;
    const nm=gets().split(' ').map(Number);
    const n=nm[0];
    const m=nm[1];
    let k=Math.min(n, m);
    const l=Math.max(n, m);
    const arr1=gets().split(' ').map(Number);
    const arr2=gets().split(' ').map(Number);
while (arr1.length !== arr2.length) {
    if (arr1.length<arr2.length) {
        arr1[k]=0;
    } else {
        arr2[k]=0;
    }
    k+=1;
}
let ind=0;
const arr=[];
for (let i=0, p=arr1.length; i<p; i+=1) {
    const el=arr1[i]+arr2[i]+ind;
    if (el>9) {
        arr[i]=el%10;
        ind= Math.floor(el/10);
        } else {
            arr[i]=el;
            ind=0;
        }
}
if (ind !==0) {
    arr[arr.length]=ind;
}
print(arr.join(' '));
quit(0);
