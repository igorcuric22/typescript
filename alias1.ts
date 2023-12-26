type chars = string;
let messsage: chars="Igor"; // same as string type

console.log(messsage);


type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
console.log(input);
input = 'Hi'; // valid
console.log(input);

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
console.log(mouseEvent);
mouseEvent = 'dblclick'; // valid
console.log(mouseEvent);
mouseEvent = 'mouseup'; // valid
console.log(mouseEvent);
mouseEvent = 'mousedown'; // valid
console.log(mouseEvent);
//mouseEvent = 'mouseover'; // compiler error


let anotherEvent: MouseEvent1;