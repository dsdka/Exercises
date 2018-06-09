/* In combinatorics, the Catalan numbers are calculated by the following 
formula: catalan-formula

Write a program to calculate the Nth Catalan number by given N */
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
let res=[1];
for (let k=2; k<=n; k+=1) {
    AddArrayWhichNumber( res, Math.floor((n+k)/k));
}
res.reverse;
print(res.join(''));
//quit(0);

