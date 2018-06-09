/* globals Map Set */
const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const n=+gets();

class Graph {
    constructor() {
        this._nodes = new Map();
    }

    addEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }
        this._nodes.get(from)
            .push(to);
    }
    hasEdge(value) {
        if (this._nodes.has(value)) {
            return true;
        } 
            return false;
        
    }
    getValue(key) {
        return this._nodes.get(key);
    }
}
const fn = (d, res, used) => {
    if (!graph.hasEdge(d)) {
        res.add(d);
        return;
    }
        used[d]=true;
        res.add(d);
        
        const t=graph.getValue(d);
        for (let i=0; i<t.length; i+=1) {
            if (used[t[i]]) {
                break;
            }
            
            
            fn(t[i], res, used);
            used[t[i]]=false;
            
        }
};
const graph = new Graph();
for (let i=0; i<n; i+=1) {
    const [f, t] = gets().split(' ');
    graph.addEdge(f, t);
}
const m=+gets();
for (let i=0; i<m; i+=1) {
    const p=gets();
    const res = new Set();
    const used = [];
    fn(p, res, used);
    let arr=[...res];
    print(arr.sort((x, y)=> x-y).join(' '));
}
//quit(0);