/* We are given an array of integers and a number S. Write a program
 to find if there exists a subset of the elements of the array that
  has a sum S.*/
  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;

const s =+gets();
const arr=gets().split(' ').map(Number);
const n=arr.length;
let sum=[];
sum[0]=1;
for (let i=0; i<n; i+=1) {
    if (sum[s]===1) {
        break;
    } else {
        let el=s;
        for (let j=s; j>=0; j -=1) {
             el=sum.lastIndexOf(1, el-1);
            // print(el);
             if (el>=0) {
                sum[el+arr[i]]=1;
             } else {
                 break;
             }
        }
      }
    }
    if (sum[s]===1) {
        print('yes');
} else {
    print('no');
}
quit(0);


