

/* Write a program that reads from the console a positive integer number
 N (1 ≤ N ≤ 20) and prints a matrix holding the numbers from 1 to N*N in
  the form of square spiral like in the examples below. */
  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;
  const n=+gets();
  let k=1;
  let arr = [];
  let row = 0;
  let col = -1;
  let direction='right';
  for (let i=0; i<n; i+=1) {
      arr[i]=Array.from({ length: n });
  }
   while (k<=n*n) {
    if (direction==='right') {
        col+=1;
        if (col<n && arr[row][col]===undefined) {
        arr[row][col]=k;
    } else {
        direction='down';
        col-=1;
    }
}
    if (direction==='down') {
        row+=1;
        if ( row<n && arr[row][col]===undefined) {
        arr[row][col]=k;
    } else {
        direction='left';
        row-=1;
    }
}
    if (direction==='left') {
        col-=1;
        if ( col>=0 && arr[row][col]===undefined) {
            arr[row][col]=k;
        } else {
            direction='up';
            col+=1;
        }
    }
    if (direction==='up') {
        row-=1;
        if (row>=0 && arr[row][col]===undefined) {
            arr[row][col]=k;
        } else {
            direction='right';
            row+=1;
            k-=1;
        }
    }
    k+=1;
   }
for (let i=0; i<n; i+=1) {
    print(arr[i].join(' '));
}
quit(0);
