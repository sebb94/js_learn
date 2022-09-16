// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
let ages = [12, 12, 23];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
let gameBoard = [["1", "2"], ["3", "4"], []];
let product1 = { name: "coffe", price: 12 };
let product2 = { name: "tv", price: 13 };
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
let getTotal = (products) => {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
};
getTotal([product1, product2]);
