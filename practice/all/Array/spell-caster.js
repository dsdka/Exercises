const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'gfwzssgisn cnbnbgsqatip uhzqajmicksyq oqkdhcfvtuld nyruxpzf tqhiblaci lodzpqbnrz',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const input = gets().split(' ');
const arr = [];
for (let i=0; i<input.length; i+=1) {
arr.push(input[i].split(''));
}
const res = [];
let k=true;
while (k) {
    k=false;
    for (let j=0; j<arr.length; j+=1) {
        if (arr[j].length) {
            k=true;
            break;
        }
    }
    for (let i=0; i<arr.length; i+=1) {
        if (arr[i].length===0) {
            
            continue;
        } else {
            res.push(arr[i].pop());
            k=true;
        }
    }
}
let pos = 0;


for (let i=0; i<res.length; i+=1) {
    pos=(res[i]).toLowerCase().charCodeAt()-96+i;
    pos=pos%res.length;
    if (pos>i) {
        for (let j=i; j<pos; j+=1) {
            [res[j], res[j+1]]=[res[j+1], res[j]];
        }
    } else if(pos<i) {
        for (let d=i; d>pos; d-=1) {
            [res[d], res[d-1]]=[res[d-1], res[d]];
        }
    }
    
}
print(res.length);
print(res.join(''));
