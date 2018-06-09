/* Write a method that multiplies a number represented as an array of
digits by a given integer number. Write a program to calculate N!. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const AddArrayWhichNumber = (arr, num) => {
  let ind=0;
  const l=arr.length;
  for (let i=0; i<l; i+=1) {
    const add = arr[i]*num + ind;
    arr[i]=add%10;
    ind=Math.floor(add/10);
    if (i===(l-1)) {
      if (ind>0 && ind<10) {
        arr[i+1]=ind;
      }
      if (ind>=10) {
        arr[i+1]=ind%10;
        arr[i+2]=Math.floor(ind/10);
      }
    }
  }
  return arr;
};
const n=+gets();
const array=[1];
if (n>1) {
  for (let i=1; i<=n; i+=1) {
   AddArrayWhichNumber(array, i);
  }
}
const result= array.reverse();
print(result.join(''));


