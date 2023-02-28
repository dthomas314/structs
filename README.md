# @dthomas314/structs
structs library for npm package

(https://github.com/dthomas314/structs)


**Install**

$ npm install @dustinleethomas/structs



**Usage**

const MinHeap = require("@dustinleethomas/structs/MinHeap");

let testArray = [1, 4, 2, 7];
let myHeap = new MinHeap();

for(const elem of testArray) {
    myHeap.insert(elem);
}

myHeap.print();
console.log(myHeap.remove());
myHeap.print();
console.log(myHeap.remove());
myHeap.print();
console.log(myHeap.remove());
myHeap.print();
console.log(myHeap.remove());
myHeap.print();
console.log(myHeap.remove());
myHeap.print();
