// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

let ages : number[] = [12,12,23]

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

let gameBoard : string[][] = [["1","2"],["3","4"],[]] 

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string, 
    price: number
}

let product1 : Product = {name: "coffe", price: 12}
let product2 : Product = {name: "tv", price: 13}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

let getTotal = ( products: Product[]) : number => {
    let total : number = 0
    for(let product of products){
       total += product.price
    }
    return total
}

getTotal([product1,product2])

