let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number

function getProduct(id){
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

const showProduct = (name, price)  => {
    console.log(`The product ${name} costs $${price}.`);
  };

showProduct(product.price, product.name);