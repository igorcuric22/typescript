function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

try{
console.log(add(4,9));
console.log(add("4","9"));
console.log(add(true,false));
} catch(e:any) {
    console.log(e.message);
}

function add1(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

try{
    console.log(add1(5,2));
    console.log(add1("5","2"));
    console.log(add1(true,false));
    } catch(e:any) {
        console.log(e.message);
    }