// Kilka roznych parametrów
const doSomething = (person, age, isFunny) => { };
// String
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
// number - co zwaraca również number
function square(num) {
    return num * num;
}
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);
// funkcja strzałkowa
const add = (x, y) => {
    return x + y;
};
// jezeli mozliwe zwrocenie wiecej niz 1 typu - domysli sie ze string | number (hover na info)
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    else {
        return num;
    }
}
// TS domysli ze ze color to string, bo jest wywołany na kontekście tablicy stringów
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toUpperCase();
});
// Void
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Never
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
// cwiczenie 1
let twoFer = (name = "you") => {
    return `One for ${name}, One for me.`;
};
twoFer();
twoFer("Seba");
let isLapYear = (year) => {
    return year % 4 === 0 ? true : false;
};
isLapYear(2012);
isLapYear(2013);
