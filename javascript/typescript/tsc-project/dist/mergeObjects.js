"use strict";
function mergeObjects(ob1, ob2) {
    return Object.assign(Object.assign({}, ob1), ob2);
}
console.log(mergeObjects({ a: 10, b: 30, k: 200 }, { c: 10, d: 90 }));
