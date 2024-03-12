// "use strict"  //! derleyici direktifi

const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
}

//? Global namespace
// const students = ["canan", "can"]



myVariable = "my string"  //! strict mode var ise => myVariable is not defined
console.log(myVariable);

console.log(this); //? window