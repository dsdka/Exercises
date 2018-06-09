// const getGets = (arr) => {
// let index = 0;
// return () => {
// const toReturn = arr[index];
// index += 1;
// return toReturn;
// };
// };
// const test = [
// 3
// -3
// -150
// ]
// const gets = this.gets || getGets(test);
 const print = this.print || console.log;

const generationVariationsWithoutRep=(n, k, index, variation, used, allVarioation) => {
    if (index===k) {
        allVarioation.push([...variation]);
        return;
    }
    for (let i=0; i<n; i+=1) {
        if (used[i]) {
            continue;
        }
        variation[index]=i+1;
        used[i]=true;
        generationVariationsWithoutRep(n, k, index+1, variation, used, allVarioation);
        used[i]=false;
    }
};
const n=4;
const k=3;
const variation=Array.from({ length: k });
const used=Array.from({ length: n })
.fill(false);
const allVarioation=[];

generationVariationsWithoutRep(n, k, 0, variation, used, allVarioation);

allVarioation.forEach(vari => console.log(vari.join(' ')));
