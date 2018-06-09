const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'o2hs123o6G0ol090le42H',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split('').reverse();
let result = [];
let j=0;
for (let i=0; i<input.length; i+=1) {
    
    if ( isNaN(input[i])) {
        result[j]=input[i];
        j+=1;
    } else {
        continue;
    }
}
print(result.join(''));
