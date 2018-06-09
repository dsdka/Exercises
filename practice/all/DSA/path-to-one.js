const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'177',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n=+gets();
let count = 0;
while (n>1) {
    if (n%2===0) {
        n=n/2;
        count+=1;
    } else if (n===3) {
        n=n-1;
        count+=1;
    } 
    else if (n%4===3) {
        n=n+1;
        count+=1;
    } else if (n%4===1) {
        n=n-1;
        count+=1;
    }
}
print(count);