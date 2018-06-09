const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'4 3'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const printCombination=(n, k, index, combination)=> {
    if (index===k) {
        print(combination.join(' '));
        return;
    }
    const start = index? combination[index-1]+1:1;
    for (let i=start; i<=n; i+=1) {
        combination[index]=i;
        printCombination(n, k, index+1, combination);
    }
}
const nk=gets().split(' ').map(Number);
const n=nk[0];
const k=nk[1];
const combination=Array.from({ length:k});

printCombination(n, k, 0, combination );
quit(0);
