const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '6',
    '1 2 3 4 5 6',
    '2 3 4 5 6 7',
    '6 5 4 3 2 1',
    '3 4 5 6 7 8',
    '4 5 6 7 8 9',
    '9 8 7 6 5 4',
    '3 5 3 -5 -4 -2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const n = +gets();
const matrix = [];
for (let i=0; i<n; i+=1) {
    matrix[i]=gets().split(' ').map(Number);
}
const coordinates = gets().split(' ').map(Number);
let sum = 0;
let maxSum = -1000000000;

for (let i=0; i<coordinates.length; i+=2) {
    let row = coordinates[i];
    let col = coordinates[i+1];
    
    if (row>=0 && col>=0) {
       row=row-1;
       col=col-1;
            for (let c=0; c<=col; c+=1) {
                sum+=matrix[row][c];
            }
            for (let r=row-1 ; r>=0; r-=1) {
                sum+=matrix[r][col];
        }
    }
    else if (row>=0 && col<0) {
        col = -col;
        row=row-1;
        col=col-1;
            for (let c=0; c<=col; c+=1) {
                sum+=matrix[row][c];
            }
            for (let r=row+1 ; r<n; r+=1) {
                sum+=matrix[r][col];
        }
    }
    else if (row<0 && col>=0) {
        row = -row;
        row=row-1;
       col=col-1;
            for (let c=matrix[0].length-1; c>=col; c-=1) {
                sum+=matrix[row][c];
            }
            for (let r=row-1 ; r>=0; r-=1) {
                sum+=matrix[r][col];
        }
    }
    else if (row<0 && col<0) {
        col = -col;
        row = -row;
        row=row-1;
        col=col-1;
            for (let c=matrix[0].length-1; c>=col; c-=1) {
                sum+=matrix[row][c];
            }
            for (let r=row+1 ; r<n; r+=1) {
                sum+=matrix[r][col];
        }
    } else {
        row=row-1;
        col=col-1;
        sum=matrix[row][col];
    }
    if (maxSum<sum) {
        maxSum=sum;
    }
    sum=0;


}
print(maxSum);