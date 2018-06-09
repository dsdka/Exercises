/* A long time ago, in a galaxy far, far away...

All jedi must mediate. Yet, when the Jedi are at their temple, they cannot mediate at the
same time, because the Force will become too much at one place and implosion will occur.
 There is a strict order for meditations: Jedi Masters mediate first, then Jedi Knights, 
 and last are the padawans.

Given the sequence of Jedi:

P, K, M, M, K, P
they will mediate in the following order:

M, M, K, K, P, P
given that M means a Jedi Master, K is a Jedi Knight, and P is a padawan.

Joro and Gosho are padawans. They want to have as much time with the Force as they can. 
Given that, they do not want to wait meaninglessly for mediation. That is why, you can help 
them to solve in which order all Jedi will mediate.

Input
Use the standard input
On the first line you will find the number N - the number of jedi, waiting for meditation
On the second line you will fin exactly N jedi, waiting for meditation:
M means jedi master
K means jedi knight
P means jedi padawan
Output
Use the standard output
On the only line, print the correct sequence of jedi, ready for meditation
Print each jedi's name
Different jedi's are separated by a single space
Constraints
0 < N < 100 000
Sample Tests
Input

Copy
3
M1 K1 P1
Output

Copy
M1 K1 P1 */

/* Queue */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '7',
    'M4 P2 P3 M1 K2 P1 K1'
]
const gets = this.gets || getGets(test);
const print = this.print || console.log;


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(value) {
        if (this.length === 0) {
            this.head = value;
        } else {
            this.tail.next = value;
        }
        this.tail = value;
        this.length += 1;
        return this;
    }
    del() {
        if (this.length === 0) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length -= 1;
        return value;
    }
}
const n = +gets();
const arr = gets().split(' ');
const masters = new Queue;
const knight = new Queue;
const padawan = new Queue;
for (const item of arr) {
    if (item[0] === 'M') {
        masters.add({
            value: item,
            next: null,
        });
    } else if (item[0] === 'K') {
        knight.add({
            value: item,
            next: null,
        });
    } else {
        padawan.add({
            value: item,
            next: null,
        });
    }
}
let result = '';
while (masters.length > 0) {
    result += masters.del() + ' ';
}
while (knight.length > 0) {
    result += knight.del() + ' ';
}
while (padawan.length > 0) {
    result += padawan.del() + ' ';
}
print(result.trim());
quit(0);