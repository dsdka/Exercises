const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'3 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const printCombinatinsWithRepead=(n, k, index, combination) =>{
    if (index===k) {
        print(combination.join(' '));
        return;
    }
    const startIndex = index ? combination[index-1]:1;
    for (let i=startIndex; i<=n; i+=1) {
        combination[index] = i;
        printCombinatinsWithRepead(n, k, index+1, combination);
    }
};
const input = gets().split(' ').map(Number);
const n=input[0];
const k = input[1];
const combin = Array.from({ length: k });
printCombinatinsWithRepead(n, k, 0, combin);
//quit(0);
