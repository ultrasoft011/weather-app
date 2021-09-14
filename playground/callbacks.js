// Callback function: a function provide as an argument to another function

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
//


const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);
};

add (1, 4, (sum) => {
    console.log(sum); // Should print: 5
})

// ES6 features that make it easier to work with objects
//
// Object property shorthand
// 
const name = 'Andres';
const userAge = 30;

const user = {
    // name: name, previous form, only with name it will grap the value of the name variable (Shorthand)
    name,
    age: userAge,
    localtion: 'Colombia',
}

// console.log(user);

// Destructuring: to an object created and extract the properties of the object
//
const product = {
    label: 'Red notebook',
    price: 3,
    salePrice: undefined,
    stock: '420-A'
};
// Rename the name of a property it's also an option from desctructuring
const {label, price} = product;
console.log(label, price);

// Destructuring with functions
//
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);