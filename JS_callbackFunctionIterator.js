function func(val, valbis, cb) {
	return cb(val);
}



function* it(val) {
	yield 1;
	yield func(val, 1);
}

function* generator(i) {
	yield i;
	yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);

let res = it(1);
console.log(res.next(), res.next(), res.next());
// iterator.next(1)
// iterator.next(1)

// https://stackoverflow.com/questions/2282140/whats-the-yield-keyword-in-javascript
