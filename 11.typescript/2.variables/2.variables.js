// Typ string
let movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
// Typ Number
let numCatLives = 9;
numCatLives += 1;
numCatLives = "zero"; //Error!
// Typ boolean
let gameOver = false;
gameOver = true;
gameOver = "true"; //error!!
// Typ Inference - TS sam przypisuje typ
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;
let isFunny = false;
isFunny = true;
isFunny = "asd";
// Typ Any
let thing = "hello"; //Nie używa się any - wtedy można robić cokolwiek i TS nie podpowie
thing = 1;
thing = false;
thing();
thing.toUpperCase();
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;
for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
