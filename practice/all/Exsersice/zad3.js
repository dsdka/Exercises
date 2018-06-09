const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'2{z10{xy}}',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


// ------------------------------------------
class Stack {
    constructor() {
        this.values = [];
    }
    get count() {
        return this.values.length;
    }
    push(el) {
        this.values.push(el);
        return this;
    }
    pop() {
        return this.values.pop();
    }
    peek() {
        return this.values[this.values.length - 1];
    }
}
const arr =gets().split('');
const count=0;
const n= new Stack();
const start = new Stack();
let k='';
let m='';
for (let i=0; i<arr.length; i+=1) {
    if (!(isNaN(arr[i]))) {
        k=k+arr[i];
        arr[i]='';
        continue;
    }
    if (k!=='') {
        m=+k; 
        n.push(m);
        k='';
        m='';
}
    
    


    if (arr[i]==='{') {
        arr[i]='';
        start.push(i);
        continue;
    }
    if (arr[i]==='}') {
        arr[i]='';
        let res='';
        const str=start.pop()+1;
        const mul=n.pop();
        for (let l=1; l<=mul; l+=1 ) {
        for (let j=str; j<i; j+=1) {
            res+=arr[j];
        }
      }
      arr[str]=res;
      for (let d=str+1; d<i; d+=1) {
          arr[d]='';
      }
    }
}
print(arr.join(''));

