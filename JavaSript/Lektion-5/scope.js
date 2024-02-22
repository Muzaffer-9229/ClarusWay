//! SCOPE

// VAR
console.log(sayi1);
var sayi1 = 33   //hoisting özelligi vardir

// console.log(deneme);   // let ve Const da hata verir
// const deneme = 5

//! scope.js:7 Uncaught ReferenceError: Cannot access 'deneme' before initialization (Const ve let hoisted olmaz)



var result = "Hi"

if (sayi1 === 33) {
    let result = "Hallo"  //Local scope
} else {
    var result = "Salut"  //Global scope
}

console.log(result); //global scope result (Hi)