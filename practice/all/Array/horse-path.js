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
'5',
'3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();
let arr=Array.from( { length: n });
for (let i=0; i<n; i+=1) {

}