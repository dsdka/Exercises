
// const fact=(n) => {
//     if (n===0 || n===1) {
//         return 1;
//     }
//         return n*fact(n-1);
// };
// console.log(fact(3));



// const reversString = (str) => {
//     if (str.lengt<=1) {
//         return str;
//     }
//    // const [firstChar, ...rest]=str;

//    const firstChar = str[0];
//    const rest = str.substr(1);
//     const reversed = reversString(rest)+firstChar;
//     return reversed;

// };
const generatePerm = (arr, index, visited, perm, permutacions) =>{
    if (index===arr.length) {
        permutacions.push([...perm]);
        return;
    }
    for (let i=0; i<arr.length; i+=1) {
        if (visited[i]) {
            continue;
        }
        perm[index]=arr[i];
        visited[i]=true;
        generatePerm (arr, index+1, visited, perm, permutacions);
        
    }
};
