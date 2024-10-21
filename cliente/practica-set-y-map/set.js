const mySet = new Set([1, 2, 3, 4, 5]);
console.log("Tiene el 3?", mySet.has(3));
mySet.delete(4);
const myArray = [...mySet];
console.log(myArray);
console.log(mySet);

const otherSet = new Set([4, 5, 6, 7]);

const unionSet = new Set([...mySet, ...otherSet]);
console.log(unionSet);

const intersectionSet = new Set([...mySet].filter(element => otherSet.has(element)));
console.log(intersectionSet);


const differenceSet = new Set([...mySet].filter(element => !otherSet.has(element)));
console.log(differenceSet);
