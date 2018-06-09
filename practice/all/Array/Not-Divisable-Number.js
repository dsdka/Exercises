const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'10'

]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
const arr=[];
for (let i=1; i<=n; i+=1) {
    if (i%3===0 || i%7===0) {
        continue;
    } 
    arr.push(i);
}
print(arr.join(' '));
