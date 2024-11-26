

function getThis() {
    return this;
}

let obj1 = {
    name : 'ramdas',
}

let obj2 = {
    name : 'ram'
};

obj1.getThis = getThis;

console.log(obj1.getThis());

function getThisStrict() {
   // "use strict";

    return this;
}
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict());
