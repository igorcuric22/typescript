function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

let c=multiply(7,6,4);
console.log(c);


c=multiply(5,7);
console.log(c);


function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

let apply:(price: number, discount?: number) => number =
    function (price: number,discount?: number) {

    if (typeof discount!== 'undefined') {
        return price * (1 - discount);
    }
        return price * 1;
    };
    
console.log(apply(100)); // 95

let apply1:(price: number, discount?: number) => number =
    (price: number,discount?: number)=> {

    if (typeof discount!== 'undefined') {
        return price * (1 - discount);
    }
        return price * 1;
    };
    
console.log(apply1(100,0.14)); // 95