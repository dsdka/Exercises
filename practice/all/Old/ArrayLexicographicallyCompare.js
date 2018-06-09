// Write a program that compares two char arrays lexicographically
// (letter by letter).
const solve = (args) => {
    const str1 = args[0].split('');
    const str2 = args[1].split('');
    const n = str1.length;
    const k = str2.length;
    const l = Math.min(n, k);
    for (let i = 0; i < l; i += 1) {
        if (str1[i] > str2[i]) {
            console.log('>');
            break;
        } else if (str1[i] < str2[i]) {
            console.log('<');
             break;
        }
             else if (str1[i] === str2[i]) {
            if (i === l - 1) {
                if (n > k) {
                    console.log('>');
                } else if (n < k) {
                    console.log('<');
                } else if (n === k) {
                    console.log('=');
                }
            }
        }
    }
}
solve(['hello', 'halo'])