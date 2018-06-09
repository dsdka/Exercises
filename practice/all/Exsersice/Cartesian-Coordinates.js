/* You are given a two-dimensional Cartesian coordinate system and the two
 coordinates (X and Y) of a point in the coordinate system. If you don't know
  what Cartesian coordinate system is Google it with Bing. As you will find,
   the coordinate system is divided by 2 lines (see the picture bellow) which 
   divide the plain in four parts. Each of these parts has a lot of points 
   that are numbered between 1 and 4. There is one point where our lines are 
   crossing. This point has the following coordinates: X=0 and Y=0. As a result
 this point is numbered 0. The points on the lines are also numbered with the 
 numbers 5 and 6 (again see the picture below).
Your task is to write a program that finds the number of the location of the 
given point in the coordinate system. */
const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
const x = gets();
const y = gets();
let res;
if (x==='0' && y==='0') {
    res=0;
} else if ( x==='0') {
    res=5;
} else if (y==='0') {
    res=6;
} else if (x[0]==='-') {
    if (y[0]==='-') {
    res=3;
    } else {
        res=2;
    }
} else if (y[0]==='-' && x[0]!=='-') {
    res=4;
} else if (x[0]!=='-' && y[0]!=='-') {
    res=1;
}
print(res);



