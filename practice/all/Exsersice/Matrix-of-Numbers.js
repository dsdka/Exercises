const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const n=+gets();
 const arr =[];
for (let i=0; i<n; i+=1) {
    arr[i]=[];
    for (let j=i+1; j<=n+i; j+=1) {
        arr[i].push(j);
    }
}
for (let i=0; i<n; i+=1 ) {
    print(arr[i].join(' '));
}
quit(0);
//print(n);
