const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '4',
    '12',
    '23',
    '34',
    '45',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();
let mer =[];
let sq=[];
let a=gets().split('');
for (let i=0; i<n-1; i+=1) {
    let b=gets().split('');
    let m=a[1]+b[0];
    mer.push(m);
    let sum = +a[1]+(+b[0]);
    if (sum>9) {
        sum=sum%10;
    }
    let s=a[0]+sum.toString()+b[1];
    sq.push(s);
    a=b;
}
print(mer.join(' '));
print(sq.join(' '));
quit(0);