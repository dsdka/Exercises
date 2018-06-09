const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'5',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const arr=[];
for (let row=0; row<n+1; row+=1) {
    arr[row]= Array.from({ length: 2*n })
    .fill('.');
}
arr[n]=Array.from({ length: 2*n })
.fill('*');
for (let col=n; col<2*n; col+=1) {
    arr[0][col]='*';
}

for (let row=1, col=n-1; row<n+1; row+=1, col-=1) {
    arr[row][col]='*';
    arr[row][2*n-1]='*';
}

for (let i=0; i<arr.length; i+=1) {
    print(arr[i].join(''));
}
