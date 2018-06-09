const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '11',
    '2 10 1 3 9 8 7 2 4 6 1',

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n=+gets();
const arr = gets().split(' ').map(Number);
const result=[];

result[0]=0;
let index=0;
let used=[];
let k;
while (index<n && index>=0) {
    
    if (used[index]) {
        k=result.indexOf(index);
         result[k]='('+index;
        
        
        result[result.length-2]=result[result.length-2]+')';
        break;
    } else {
    result.push(arr[index]);
    used[index]=true;
    index=arr[index];
    }
}
let res='';
result.pop();
if (!k) {
    //k=result.length-1;
    print(result.join(' '));
} else {
for (let i=0; i<k; i+=1) {
    res+=result[i]+' ';
}
res=res.trim();
for (let i=k; i<result.length; i+=1) {
    res+=result[i]+' ';
}
print(res.trim());
}

