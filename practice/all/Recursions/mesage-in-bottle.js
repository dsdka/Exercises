const getGets = (arr) => {
let index = 0;
return () => {
const toReturn = arr[index];
index += 1;
return toReturn;
};
};
const test = [
    '1122',
    'A1B12C11D2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;
const quit = this.quit || (() => {});

const decode=(encoded, decoded, chifers, decodeMes) => {
    if (encoded.length===0) {
        //print(decoded);
        decodeMes.push(decoded);
    }
    for (const leter in chifers) {
        const chifer=chifers[leter];
        if(encoded.startsWith(chifer)) {
            decode(encoded.substring(chifer.length), decoded+leter, chifers, decodeMes);
        }
    }
}

const encoded = gets();
const chifers = {};
const decodeMes = [];
const regex = new RegExp(/(\D\d+)/);
gets().split(regex).map((x)=>{
    if (x!=='') {
        const keyName = x.match(/\D/);
        const keyValue = x.match(/\d+/);
        chifers[keyName[0]]=keyValue[0];
    }
});
decode(encoded,"", chifers, decodeMes);
decodeMes.sort();
print(decodeMes.length);
print(decodeMes.join('\n'));



