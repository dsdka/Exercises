const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '0 0',
    '5 6',
    '1 # 5 4 6 4',
    '3 2 # 2 6 2',
    '9 1 7 6 3 1',
    '8 2 7 3 8 6',
    '3 6 1 3 1 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const [r, c] = gets().split(' ').map(Number);
const [n, m] = gets().split(' ').map(Number);

const matrix = [];

for (let i = 0; i < n; i += 1) {
    matrix[i] = gets().split(' ');
};
let used = [];
for (let i = 0; i < n; i += 1) {
    used[i] = [];
    for (let j = 0; j < m; j += 1) {
        used[i][j] = false;
    }
}




move = (r, c, sum) => {
    if (r >= n || c >= m || r < 0 || c < 0) {
        return;
    }
    if (used[r][c]) {
        return;
    }

    if (matrix[r][c] === '#') {
        return;
    }
    let d = +matrix[r][c];
    used[r][c] = true;


    if (((d + r < n) ||
            (d + c < m) ||
            (r - d >= 0) ||
            (c - d >= 0))) {
        sum += d;
    }

    move(d + r, c, sum);
    move(r, d + c, sum);
    move(r - d, c, sum);
    move(r, c - d, sum);
    used[r][c] = false;

    maxSum = Math.max(maxSum, sum);
}




let maxSum = 0;

move(r, c, 0);
print(maxSum);