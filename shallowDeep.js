// shallow copy- object.assign, spread operator, array.slice, array.from
// deep copy - JSON.parse(JSON.stringify()), structuredClone(), lodash.cloneDeep()

const original = { a: 1, b: { c: 2 } };
const shallowCopy = {...original};

shallowCopy.b.c = 3; // modifies original as well
console.log(original); // { a: 1, b: { c: 3 } }
console.log(shallowCopy); // { a: 1, b: { c: 3 } }

Object.assign(original, { d: 4 });
console.log(original); // { a: 1, b: { c: 3 }, d: 4 }

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4; // does not modify original
console.log(original); // { a: 1, b: { c: 3 }, d: 4 }
console.log(deepCopy); // { a: 1, b: { c: 4 }, d: 4 }

//lodash example
const _ = require('lodash');
const lodashDeepCopy = _.cloneDeep(original);
lodashDeepCopy.b.c = 5; // does not modify original
console.log(original); // { a: 1, b: { c: 3 }, d: 4 }
console.log(lodashDeepCopy); // { a: 1, b: { c: 5 }, d: 4 }

// structuredClone example
const structuredCloneCopy = structuredClone(original);
structuredCloneCopy.b.c = 6; // does not modify original
console.log(original); // { a: 1, b: { c: 3 }, d: 4 }
console.log(structuredCloneCopy); // { a: 1, b: { c: 6 }, d: 4 }