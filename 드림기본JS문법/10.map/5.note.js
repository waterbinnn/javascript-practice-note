const set = new Set("hello");
console.log(set);

const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 3, 4, 3, 4]));

const uniqSet = (array) => [...new Set(array)];

alert("Savage Your Life");

const Savage = new Set();
