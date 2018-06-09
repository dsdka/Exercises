const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '1',
    '2',
    '3',
    '10'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const sumArr = (arr1, arr2) => {
    const l= arr1.length;
    const k=arr2.length;
    const m=Math.max(l, k);
    if (l>k) {
        for (let i=k; i<l; i+=1) {
            arr2[i]=0;
        }
    } else {
        for (let i=l; i<k; i+=1) {
            arr1[i]=0;
        }
    }
    
    let ind=0;
    const res=[];
    for (let i=0; i<m; i+=1) {
        let el=arr1[i]+arr2[i]+ind;
        if (el>9) {
            el=el%10;
            ind=1;
        } else {
            ind=0;
        }
        res[i]=el;
    }
    if (ind === 1) {
        res[m]=ind;
    }
    return res;    
}
let arr=[] 
let t1=gets().split('').map(Number);
let t2=gets().split('').map(Number);
let t3=gets().split('').map(Number);
const n=+gets();
arr[0]=t1.reverse();
arr[1]=t2.reverse();
arr[2]=t3.reverse();
for (let i=3; i<n; i+=1) {
    arr[i]=sumArr(sumArr(arr[i-3], arr[i-2]), arr[i-1]);
}
const result=arr[n-1].reverse();
print(result.join(''));
//quit(0);

