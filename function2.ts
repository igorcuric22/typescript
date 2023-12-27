let add: (x: number, y: number) => number;

add = function (x: number, y: number) {
    return x + y;
};

console.log(add(4,6));


let add1: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };


console.log(add1(4,7));

let add3= function (x: string, y: string): number {
    return x.concat(y).length;
};
console.log(add3("igor","curic"));

