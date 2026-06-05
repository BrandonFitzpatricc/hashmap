import { HashMap } from "./scripts/hashmap.js";

const test = new HashMap();

test.setEntry("apple", "red");
test.setEntry("banana", "yellow");
test.setEntry("carrot", "orange");
test.setEntry("dog", "brown");
test.setEntry("elephant", "gray");
test.setEntry("frog", "green");
test.setEntry("grape", "purple");
test.setEntry("hat", "black");
test.setEntry("ice cream", "white");
test.setEntry("jacket", "blue");
test.setEntry("kite", "pink");
test.setEntry("lion", "golden");

console.log("Before exceeding load capacity: ");
console.log(test.entries());
console.log(`length: ${test.length()}\n`);

test.setEntry("banana", "green");
test.setEntry("dog", "black");
test.setEntry("jacket", "white");

console.log("After overwriting entries:");
console.log(test.entries());
console.log(`length: ${test.length()}\n`);

test.setEntry("moon", "silver");

console.log("After exceeding load capacity:");
console.log(test.entries());
console.log(`capacity: ${test.capacity}`);
console.log(`length: ${test.length()}\n`);

test.setEntry("hat", "gray");
test.setEntry("ice cream", "brown");
test.setEntry("kite", "red");

console.log("After overwriting entries (again):");
console.log(test.entries());
console.log(`length: ${test.length()}\n`);
