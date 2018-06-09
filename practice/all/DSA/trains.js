const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '5 2 10',
    '2 4',
    '3 7',
    '1 2',
    '1 8',
    '5 9',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

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
}

const [n, m, l] = gets().split(' ').map(Number);
const graph = new Graph;
const from = new Set();
const to = [];
let count = 0;
const train = new Set();
for (let i=0; i<n; i+=1) {
    const [e, b] = gets().split(' ').map(Number);
    graph.addEdge(e, b);
    from.add(e);
    to.push(b);
}
const afrom = [...from].sort();

to.sort();
// print(graph);
// print(afrom);
// print(to);
let bestCount = 0;
for (let d=0; d<afrom.length; d+=1) {
let  i=d;
let j=0;
let full = 0;
while (i<afrom.length) {
    const f = afrom[i];
    const t =to[j];
    if (f<t) {
        const child = graph.getValue(afrom[i]);
        child.sort();
        let p=0;
        
        while (full<m || child[p]) {
            //print(child[p])
            if(full===m) {
                break;
            }
            train.add(child[p]);
            count+=1;
            full+=1;
            p+=1;
            
           
        }
        i+=1;
    } else {
        if (train.has(t)) {
        full-=1;

        //print(full);
        //print('-------------');
        }
        j+=1;

    }
    
}
if (bestCount < count) {
    bestCount=count;
}
count=0;
}
print(bestCount);
quit(0);

