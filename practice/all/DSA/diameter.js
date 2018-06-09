

/* global Map */
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
    '3 4 3',
    '0 3 4',
    '0 2 6',
    '1 4 9',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this.nodes=new Map();
    }
    addEdge(from, to, length) {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, []);
        }
        if (!this.nodes.has(to)) {
            this.nodes.set(to, []);
        }
        this.nodes.get(from)
        .push({
            value: to,
            length: length,
        });
        this.nodes.get(to)
        .push({
            value: from,
            length: length,
        });
    }
    hasEdge(val) {
        if (this.nodes.has(val)) {
            return true;
        }
        return false;
    }
    getValue(key) {
        return this.nodes.get(key);
    }
}
const fn = (p , used) => {
    if (!graph.hasEdge(p) || used[p]) {
        //count=0;
        return count+count;
    }
    
    const t=graph.getValue(p);
    for (let i=0; i<t.length; i+=1) {
        used[p]=true;
        if (used[t[i].value]) {
            continue;
        }
        count+=t[i].length;
        fn(t[i].value, used);
        used[p]=false;
        if (maxCounter<count) {
            maxCounter=count;
        }
        count=count-t[i].length;
        us[p]=true;
    }
}
const n=+gets();
const graph = new Graph();
for (let i=0; i<n-1; i+=1) {
    const [f, t, l] = gets().split(' ').map(Number);
    graph.addEdge(f, t, l);
}
let res = 0;
let maxCounter = 0;
let count=0;
const us=[];
 for (let i=0; i<n; i+=1) {
     const p=i;
    if (us[p]) {
        continue;
    }
    const used = [];
    
    (fn(p , used));
    // if (res<maxCounter) {
    //     res=maxCounter;
    // }
}
print(maxCounter);


