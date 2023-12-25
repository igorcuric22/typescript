interface Product{
    id: number,
    name: string,
    price: number
};

function getProduct(id:number):Product {
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);


const showProduct = (name: string, price:number)  => {
  console.log(`The product ${name} costs $${price}.`);
};

const product1 = getProduct(1);
// showProduct(product1.price, product1.name);

showProduct(product1.name,product1.price);

