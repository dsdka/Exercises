/* Write a program that calculates N! / K! for given N and K.

Use only one loop. */
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
const k=+gets();

let fact=[1];
for (let i=k+1; i<=n; i+=1) {
    AddArrayWhichNumber(fact, i);
}
fact.reverse();
print(fact);
quit(0);