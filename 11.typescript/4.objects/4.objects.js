// Obiekty jako parametry
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });
// jezeli damy coś za dużo w literale obiektu - będzie błąd
//printName({ first: "Thomas", last: "Jenkins" , age:47});
// ale jak przekażemy obiektu jako zmienna - nie bedzie traktowane jako blad
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
let coordinate2 = { x: 34, y: 2 };
function randomCoordinate2() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint2(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
const myPoint = { x: 1, y: 3 };
const user = {
    id: 12837,
    username: "catgurl",
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: "yellow",
};
const christy = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};
