const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test =`10
(5 <- 11)
(1 <- 8)
(11 <- 3)
(8 <- 7)
(1 <- 5)
(11 <- 2)
(8 <- 6)
(2 <- 15)
(8 <- 4)`.split('\n')

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

class Graph {
    constructor() {
        this.nodes = new Map();
    }
    addEdge (from, to, leafs, vertises) {
        if (!this.nodes.has(from)) {
            this.nodes.set(from, []);
        }
        this.nodes.get(from)
        .push(to);
        if (! this.nodes.has(to)) {
            this.nodes.set(to, []);
        }
        this.nodes.get(to)
        .push(from);
        vertises.add(from);
        leafs.add(to);
    }

    hasEdge (val) {
       if( this.nodes.has(val) ) {
            return true;
        }
        return false;
    }

    getValue(key) {
        return this.nodes.get(key);
    }
};

const bestPath = (l, count) => {
    count+=l;
    
    const childs = graph.getValue(l);
    if (childs.length===1) {
       if (bestCount<count) {
           bestCount=count;
           bestVert=l;
       }
         res = {
            vert: bestVert,
            count: bestCount,
        };
        //print(res);
        
        return res;
     }
     

    used.add(l);
    for (ch of childs) {
        if (used.has(ch)){
            continue;
        }
        bestPath (ch, count);
    }

}
const n=+gets();
const graph = new Graph;
const leafs = new Set();
const vertises=new Set();

for (let i=0; i<n-1; i+=1) {
    const input = gets().split(/<-|\)|\(/);
    const from = +input[1];
    const to = +input[2];
    graph.addEdge(from, to,leafs,vertises);
    
}
for (const ver of vertises) {
    leafs.delete(ver);
}
//let res = [];
let l = [...leafs][0];
let count = l;
let used = new Set();
let res = [];
//print(l);
used.add(l);
//print(used);
let bestCount = 0;
 let st = graph.getValue(l)[0];
 //print(st);
 bestPath(st, count);
 
 //let bestVert;
//  print(res);
//  print(bestVert);
st = graph.getValue(bestVert)[0];
// print(bestVert);
count=bestVert;
bestCount = 0;
used.clear();
used.add(bestVert);
bestPath(st, count);
print(bestCount);
quit(0);

