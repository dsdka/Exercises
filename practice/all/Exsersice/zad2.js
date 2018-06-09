const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'2 3',
'0 5 2',
'2 5 3',


]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
//-----------------------------------------

const [n, m] = gets().split(' ').map(Number);
let arr = Array.from({ length: n });
let row;
let col;
for (let i=0; i<n; i+=1) {
    arr[i]=gets().split(' ').map(Number);
    if (typeof row==='undefined' && typeof col ==='undefined' ) {
    for (let j=0; j<m; j+=1) {
        if (arr[i][j]===0) {
            row=i;
            col=j;
            break;
            }
        }
    } else {
        continue;
    }
}
let count=0;
let l=1;
let r=1;
let u=1;
let d=1;
while (l!==0 || r!==0 || u!==0 || d!==0) {
     l=0;
     r=0;
     u=0;
     d=0;

    if ((col-1)>=0) {
        l = arr[row][col-1];
    } 
    if ( (col+1)<m) {
        r= arr[row][col+1];
    }
    if ((row-1)>=0) {
        u = arr[row-1][col];
    } 
    if ((row+1)<n) {
        d=arr[row+1][col];
    } 
    if (l===0 && r===0 && u===0 && d===0) {
        break;
    }
    if (l>=r && l>=u && l>=d) {
        col-=1;
        arr[row][col]=l-1;
        count+=1;
    } else if (r>=l && r>=u && r>=d) {
        col+=1;
        arr[row][col]=r-1;
        count+=1;
    } else if (u>=l && u>=r && u>=d) {
        row-=1;
        arr[row][col]=u-1;
        count+=1;
    } else {
        row+=1;
        arr[row][col]=d-1;
        count+=1;
    }     
}
print(count);


