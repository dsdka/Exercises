const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '7 4',
'Emo Misho Ivanka Ginka Vancho Stancho Sashka',
'Emo Misho',
'Misho Emo',
'Misho Sashka',
'Sashka Stancho',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});



const [n, k] = gets().split(' ').map(Number);
const arr = gets().split(' ');
const obj = {}
obj[arr[0]]={
    prev:null,
    next:arr[1],
};
for( let i=1; i<n-1; i+=1) {
    obj[arr[i]] = {
        prev: arr[i-1],
        next: arr[i+1],
    }
};
obj[arr[n-1]]={
    prev:arr[n-2],
    next:null,
}
let first =arr[0];
const detach = (f) => {
 if(obj[f].next) {
    obj[obj[f].next].prev=obj[f].prev;    
 }
 if(obj[f].prev) {
    obj[obj[f].prev].next = obj[f].next;
 }
 obj[f].next=null;
 obj[f].prev = null;
}
const attach = (f, s) => {
    if (obj[s].prev) {
    obj[obj[s].prev].next=f
    obj[f].prev = obj[s].prev;
    };
    obj[s].prev=f;
    obj[f].next=s;

}
for( let i=0; i<k; i+=1) {
    const input = gets().split(' ');
    ft=input[0];
    seq = input[1];
    if (obj[ft].next===seq || ft===seq) {
        continue;
    }
    if(seq===first) {
        first = ft;
    } else if ( ft===first) {
        first=obj[ft].next;
    }

    detach(ft);
    attach(ft,seq);
}
const res = [];
let p=first;
res.push(p);
for(let i=0; i<n-1; i+=1) {
    if (!obj[p].next) {
        break;
    }
    p=obj[p].next;
    res.push(p);
};
print(res.join(' '));