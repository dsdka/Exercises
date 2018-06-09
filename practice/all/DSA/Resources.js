/* globals Map */
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
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this._nodes = new Map();
    }

    addEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set()
        }
    }
}


