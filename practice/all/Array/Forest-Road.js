const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'4'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const arr =[];
for (let i=0; i<2*n-1; i+=1) {
    arr[i]=Array.from({ length:n })
    .fill('.');
}
for (let i=0, j=0; i<2*n-1; i+=1) {
    arr[i][j]='*';
    if ( i<n-1) {
       j+=1;
    } else {
        j-=1;
    }
}

for (let i=0; i<2*n-1; i+=1) {
    print(arr[i].join(''));
}
quit(0);