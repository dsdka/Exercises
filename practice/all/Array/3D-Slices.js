const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
'4 2 3',
'3 4 1 9 | 1 2 3 8 | 1 5 6 7',
'1 2 1 9 | 5 1 3 9 | 5 3 3 8',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const sliceH = (h, d, w, cub, sum)=> {
    let count = 0;
    let sumH=0;
    for (let i=0; i<h-1; i+=1) {
        
        for (let j=0; j<d; j+=1) {
            for (let k = 0; k<w; k+=1) {
                sumH+=cub[i][j][k];

            }
        }
        if (sumH===sum) {
            count+=1;
            sumH=0;
        }
    }
    return count;
}

const sliceD = (h, d, w, cub, sum) => {
    let count = 0;
    let sumD=0;
    for (let i=0; i<d-1; i+=1) {
        
        for (let j=0; j<h; j+=1) {
            for (let k = 0; k<w; k+=1) {
                sumD+=cub[j][i][k];

            }
        }
        if (sumD===sum) {
            count+=1;
            sumD=0;
        }
    }
    return count;

}
const sliceW = (h, d, w, cub, sum)=> {
    let count = 0;
    let sumW=0;
    for (let i=0; i<w-1; i+=1) {
        
        for (let j=0; j<h; j+=1) {
            for (let k = 0; k<d; k+=1) {
                sumW+=cub[j][k][i];

            }
        }
        if (sumW===sum) {
            count+=1;
            sumW=0;
        }
    }
    return count;
}
const readMatrix = () => {
    const [w, h, d] = gets().split(' ').map(Number);
    const cub = [];
    for (let i=0; i<h; i+=1) {
        cub[i]=gets().split(' | ');
        for (let j=0; j<d; j+=1) {
            cub[i][j]=cub[i][j].split(' ').map(Number);
        }
    }
    return cub;  
};
const cub = readMatrix();
const h= cub.length;
const d= cub[0].length;
const w=cub[0][0].length;
let count=0;
let sum=0;
let sumCub=0;
for (let i=0; i<h; i+=1) {
    for (let j=0; j<d; j+=1) {
        for (let k=0; k<w; k+=1) {
            sumCub+=cub[i][j][k];
        }
    }
}
let res = sliceH(h, d, w, cub, sumCub/2)+sliceD(h, d, w, cub, sumCub/2)+sliceW(h, d, w, cub, sumCub/2);
print(res);
