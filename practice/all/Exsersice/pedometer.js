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
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const mili=+gets();
const result = mili*1609;
print(result);