const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}

console.log(counter); // 1

const max1 = 100;
let counter1 = 100;

if (counter1 < max1) {
    counter1++;
}

console.log(counter1); // 100

const max2 = 100;
let counter2 = 100;

if (counter2 < max2) {
    counter2++;
} else {
    counter2= 1;
}

console.log(counter2);

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)

let discount1: number;
let itemCount1 = 11;

if (itemCount1 > 0 && itemCount1 <= 5) {
    discount1 = 5;  // 5% discount
} else if (itemCount1 > 5 && itemCount1 <= 10) {
    discount1 = 10; // 10% discount 
} else if (itemCount1 > 10) {
    discount1 = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)