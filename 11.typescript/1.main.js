// TYPESCRIPT - sprawdzanie statyczne kodu, bez uruchamiania go - głównie sprawdza typy
console.log(null * 213);
console.log(undefined * 2123);
const obj = {
    width: 20,
    height: 30,
};
let result = obj.width * obj.heigth;
// w przypadku literówki - w czystym JSie wynik dostaniemy "undefined"
console.log(result);
// podpowiada, kiedy nie ma argumentow albo argument jest string zamiast number
console.log(Math.round(2.22));
console.log(Math.round("asd"));
