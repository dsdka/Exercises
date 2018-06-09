const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '4',
'Harry Potter',
'm',
'3',
'quidditch,defeating dark wizards,magic brooms',
'Albus Dumbledore',
'm',
'3',
'teaching,magic cookies,quidditch',
'Professor McGonagall',
'f',
'2',
'magic cookies,teaching',
'Ginny Weasley',
'f',
'2',
'quidditch,magic brooms',
    
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const fn=(arr1, arr2, count)=> {
    for (let i=0; i<arr1.length; i+=1) {
        for (let j=0; j<arr2.length; j+=1) {
            if (arr1[i].toLowerCase()===arr2[j].toLowerCase()) {
                count+=1;
            }
        }
    }
    return count;
}
const n=+gets();
const men = new Map();
const women = new Map();
for (let i=0; i<n; i+=1) {
    const name = gets();
    const pol = gets();
    const br = +gets();
    const interes = gets().split(',');
    if (pol==='m') {
        men.set(name, interes);
    }
    if (pol==='f') {
        women.set(name, interes);
    }
}
let maxCount = 0;
let bestNameWoman;
let bestNameMan;


for (const [nameMen, interMen] of men) {
    for (const [nameWomen, interWom] of women) {
        let cou = fn(interMen, interWom, 0);
        if (maxCount<cou) {
            maxCount=cou;
            bestNameMan = nameMen;
            bestNameWoman = nameWomen;
        }else if (maxCount===cou) {
             if (bestNameMan>nameMen) {
                bestNameMan=nameMen;
                bestNameWoman=nameWomen;
            }
        }
    }
}
// print(bestNameMan);
// print(bestNameWoman);
// print(maxCount);
// print(women);
// print(men);
print(`${bestNameMan} and ${bestNameWoman} have ${maxCount} common interests!`);


