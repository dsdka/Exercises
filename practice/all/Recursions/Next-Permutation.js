const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'15',
'11 6 4 12 5 8 14 7 15 3 2 10 1 13 9',
];
const gets = this.gets || getGets(test);

const print = this.print || console.log;


const n=+gets();
const arr = gets().split(' ').map(Number);
let k=n-1;

for ( let i=n-1; i>=0; i-=1) {
    if (arr[i]<arr[i-1]) {
        k=i-1;
    } else {
        break;
    }
}
if (k===n-1) {
    [arr[k], arr[k-1]] = [arr[k-1], arr[k]];
    print(arr.join(' '));
} else {
let ind =k;
    for ( let i=k+1; i<n; i+=1) {
        if (arr[k-1]<arr[i]) {
            ind = i;
            break;
        }
    }
[arr[ind], arr[k-1]] = [arr[k-1], arr[ind]];

const arr2 =[];
for (let i=0; i<k; i+=1) {
    arr2[i]=arr[i];
}
for (let i=arr.length-1, m=k; i>=k; i-=1, m+=1) {
    arr2[m]=arr[i];
}
print(arr2.join(' ')); 
}
//quit(0);
