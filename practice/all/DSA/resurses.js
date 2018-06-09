/* global Map() Set() */
const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '8',
    'index.html needs main.css',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'index.html needs logo.png',
    'main.js needs player.png',
    'main.js needs partial.html',
    'partial.html needs partial.js',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {} );

class Graph {
    constructor() {
        this.nodes= new Map();
    }
    addEdge(from, to) {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, []);
        }
        
        this.nodes.get(from)
        .push(to);
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
    getSortdGrapf() {
        const path= [];
        while (true) {
            const best = this.getBest();
            path.push(best);
            this.remove(best);
        }
    }
}

const n=+gets();
const vertises = new Set();
const graph = new Graph;
const useed = new Set();
const counter = new Map();
for ( let i=0; i<n; i+=1)  {
const input = gets().split(' ');
const from=input[0];
const to = input[2];
graph.addEdge(from, to);
vertises.add(from);
vertises.add(to);
if (!counter.has(from)) {
    counter.set(from, 0);
}
if (!counter.has(to)) {
    counter.set(to, 0);
}
counter.set(to, counter.get(to)+1);
}
const res = [];
//print(vertises.size);
// let c= vertises.size();
// print(c);
  while (vertises.size) {
     const arr=[];
    for (const el of [...vertises]) {
        if (counter.get(el)>0 || useed.has(el)) {
            continue;
        }
        //print(el);
        arr.push(el);
    }
    arr.sort();
    useed.add(arr[0]);
    if (graph.hasEdge(arr[0])) {
    let child = graph.getValue(arr[0]);
    //print(child);
    for (const v of child) {
        counter.set(v, counter.get(v)-1);
    }
}
//print(arr);
    res.push(arr[0]);
    vertises.delete(arr[0]);
  }
  print(res.join(' '));
 //print(k);
// print('---------------');
// print(counter);
// print('---------------');
// print(vertises);
