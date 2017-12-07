/* We are given a matrix of strings of size N x M. Sequences in the matrix we
define as sets of several neighbour elements located on the same line, column
 or diagonal. Write a program that finds the longest sequence of equal strings
  in the matrix and prints its length.*/
  const gets = this.gets || require('readline-sync').question;
  const print = this.print || console.log;
  const nm=gets().split(' ').map(Number);
  const n=nm[0];
  const m=nm[1];
  const arr=[];
  let count=1;
  let maxCount=0;
  for (let i=0; i<n; i+=1) {
      const input=gets().split(' ');
      arr[i]=input;
  }
  for (let i=0; i<n; i+=1) {
      for (let j=0; j<m-1; j+=1) {
          if (arr[i][j]=== arr[i][j+1]) {
              count+=1;
          } else {
              if (maxCount<count) {
                  maxCount=count;
              }
                  count=1;
          }
          if (maxCount<count) {
            maxCount=count;
        }
      }
  }
  count=1;
  for (let i=0; i<m; i+=1) {
    for (let j=0; j<n-1; j+=1) {
        if (arr[j][i]===arr[j+1][i]) {
            count+=1;
        } else {
            if (maxCount<count) {
                maxCount=count;
            }
                count=1;
        }
        if (maxCount<count) {
            maxCount=count;
        }
    }
  }
  count=1;
  const k=Math.min(n, m);
  if (n>m) {
    for (let l=0; l<(n-m)+1; l+=1) {
        for ( let i=0, j=l; j<k-1; i+=1, j+=1) {
            if (arr[i][j]===arr[i+1][j+1]) {
                count+=1;
            } else {
                if (maxCount<count) {
                    maxCount = count;
                    }
                count=1;
            }
            if (maxCount<count) {
                maxCount = count;
                }
        }
        count=1;
    }
  } else {
  for ( let l=0; l<k; l+=1) {
    for ( let i=0, j=l; j<k-1; i+=1, j+=1) {
        if (arr[i][j]===arr[i+1][j+1]) {
            count+=1;
        } else {
            if (maxCount<count) {
                maxCount = count;
                }
            count=1;
        }
        if (maxCount<count) {
            maxCount = count;
            }
    }
    count=1;
    for ( let i=l+1, j=0; i<k-1; i+=1, j+=1) {
        if (arr[i][j]===arr[i+1][j+1]) {
            count+=1;
        } else {
            if (maxCount<count) {
                maxCount = count;
                }
            count=1;
        }
        if (maxCount<count) {
            maxCount = count;
            }
    }
    count=1;
  }
}
  count=1;
  for (let l=k-1; l>=0; l-=1) {
  for (let i=0, j=l; i<k-1; i+=1, j-=1) {
    if (arr[i][j]===arr[i+1][j-1]) {
        count+=1;
    } else {
        if (maxCount<count) {
            maxCount=count;
                   }
        count=1;
    }
    if (maxCount<count) {
        maxCount=count;
    }
  }
  count = 1;
}
    print(maxCount);
    quit(0);
