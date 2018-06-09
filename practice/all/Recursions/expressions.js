const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '000',
    '0',
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const expressions = (index, n, k, arr, res, varia, used, input, digit) => {
    if (index === k) {
        for (let i = 0; i < k; i += 1) {
            // if (input[i]===0 && varia[i]==='') {
            //     continue;
            // }

            res += input[i] + varia[i];
        }
        res += input[k];
        if (res.match(/0[0-9]/)) {
            res = '';
        }
        // print(res);
        if (digit === eval(res)) {
            counter += 1;
        }
        //print(sum);
        //res.push([...varia]);
        return;
    }
    for (let i = 0; i < n; i += 1) {
        varia[index] = arr[i];
        used[index] = true;
        expressions(index + 1, n, k, arr, res, varia, used, input, digit);
        used[index] = false;
    }
}

const input = gets().split('').map(Number);
const digit = +gets();
const sim = ['*', '+', '-', ''];
const res = '';
const varia = [];
const used = [];
let counter = 0;
expressions(0, 4, input.length - 1, sim, res, varia, used, input, digit);
print(counter);