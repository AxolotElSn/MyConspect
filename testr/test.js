function makeCounter() {
  let count = 10;
  return () => count++;
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2()); 