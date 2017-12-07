/* By given N, generate all permutations with numbers between 1 and N */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=3;// +gets();
const arr = [];
for (let i=1; i<=n; i+=1) {
    arr[i-1]=i;
}
const getPerm = (arrs) => {
    const generatePerm = (ar, ind, visited, perm, permutations ) => {
        if (ind===ar.length) {
            permutations.push([...perm]);
            return;
        }
        for (let i=0; i<ar.length; i+=1) {
            if (visited[i]) {
                continue;
            }
            perm[ind]=ar[i];
            visited[i]=true;
            generatePerm(arr, ind+1, visited, perm, permutations);
            visited[i]=false;
        }
    };
    const permutations = [];
    const perm = [];
    const ind = 0;
    const visited = [];
    generatePerm(arrs, ind, visited, perm, permutations);
    return permutations;
};
getPerm(arr).
forEach((permutation)=>print(permutation.join(' ')));
