const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'5 * (123 * (1 + 3) + ((4 - 3) / 6))',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Stack {
    constructor() {
        this.vals = [];
    }
    pushSt(val) {
        this.vals.push(val);
        return this;
    }
    popSt() {
        return this.vals.pop();
    }
}

const str = gets();
const ind=[];

//const stack = new Stack();
for (let i=0; i<str.length; i+=1) {
    if (str[i]==='(') {
        ind.push(i);
    }
    else if (str[i]===')') {
       // const p = ind.pop();
        print((str.slice(ind.pop(), i+1)));
    }
}
//quit(0);
//print(res.join('\n'));