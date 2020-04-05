// numbers min and max
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

// floating point precision
console.log(0.2 + 0.4 === 0.8);
console.log(0.2);
console.log((0.2).toFixed(1));
console.log(((0.2 + 0.4) * 100) / 100);

// bigInt
const bigInt1 = 56710000029843109982104n;
const bigInt2 = bigInt(74710030029843109982191);

console.log(bigInt1);
console.log(bigInt2);

// strings
const string1 = 'hello';
const string2 = 'HELLO';
const string3 = `${string1}`;

console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string3.startsWith('he'));

// tagged templates
const logProductDetails = (strings, productPrice, productDetails) => {
	let price = 'fairly cheap';

	if (productPrice > 20) {
		price = 'pretty expensive';
	}

	return strings + productDetails + price;
};

const prodPrice = 29.99;
const prodDesc = 'JavaScript - Course';

const product = logProductDetails`This product is ${prodPrice} and is a ${prodDesc}`;

console.log(product);

// regular expressions
const regEx = /^\S+@\S+\.\S+$/;
const userEmail = 'test@test.com';

console.log(regEx.test(userEmail));
