const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 5',
    '0 3',
    '2 1',
    '1 4',
    '1 3',
    '4 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
const arr = Array.from({
    length: n,
}, (x) => {
    return {
        count: 0,
        child: [],
        visited: false,
    };
});



for (let i = 0; i < m; i += 1) {
    const [first, to] = gets().split(' ').map(Number);
    arr[first].child.push(to);
    arr[to].count += 1;
}
const res=[];
let k=0;
while (res.length<arr.length) {
    let ind;
    for (let i=0; i<n; i+=1) {
        if (arr[i].count===0 && arr[i].visited===false) {
            ind=i;
            break;
        }
    }
    for (const el of arr[ind].child) {
        arr[el].count-=1;
    }
   
    res.push(ind);
    arr[ind].visited=true;
    
}
print(res.join('\n'));
//quit(0);