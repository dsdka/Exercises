const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    'baca',
    '2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});



const combinationNumb = (arr, ind, start, comb) => {
    if (ind >= n) {

        comb.push([...arr.slice(0, n)]);
        // result.push([...comb]);
    } else {
        for (let i = start; i < arr.length; i += 1) {
            arr[ind] = i;
            combinationNumb(arr, ind + 1, i + 1, comb)

        }
    }
}
const combinationStr = (arr, ind, start, comb, l) => {
    if (ind >= n) {

        comb.push([...arr.slice(0, n)]);
        // result.push([...comb]);
    } else {
        for (let i = start; i < arr.length; i += 1) {
            arr[ind] = l[i];
            combinationStr(arr, ind + 1, i + 1, comb, l)

        }
    }
}




const permute = (arr, m = [], result) => {
    if (arr.length === 0) {
        result.push(m)
    } else {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next), result)
        }
    }
}

const k = +gets();
const l = gets().split('').sort();
const n = +gets();
const arr = Array.from({
    length: k
});

const arrl = Array.from({
    length: l.length
});
const combNumbers = [];
const combLeters = [];
const resultFinal = new Set();



combinationNumb(arr, 0, 0, combNumbers);
combinationStr(arrl, 0, 0, combLeters, l);





merge = (arr1, arr2) => {
    let result = '';

    for (let i = 0; i < n - 1; i += 1) {
        result += arr1[i] + arr2[i] + '-';

    }
    result += arr1[n - 1] + arr2[n - 1];
    resultFinal.add(result);

}

for (let num of combNumbers) {
    for (let ls of combLeters) {
        let result = [];
        let lss = [...ls];
        permute(lss, [], result);
        for (let i = 0; i < result.length; i += 1) {
            merge(num, result[i]);
        }

    }
}
const count = resultFinal.size;
const finalRes = [...(resultFinal)].sort();
print(count);

print(finalRes.join('\n'));