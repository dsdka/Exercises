/* globals Map */
const map = new Map();
const objMap ={};
const key = 'John';
const value = 123;
// Add;
map.set(key, value);
objMap[key] = value;
objMap.'John' = 123;

//Remove/ Delete;
map.delete(key);
delete objMap[key];

//Get

map.get(key);
objMap[key];

// Find

console.log(map.has(key));
console.log(objMap[key]);
console.log(!!objMap[key]);
console.log(map.size);


