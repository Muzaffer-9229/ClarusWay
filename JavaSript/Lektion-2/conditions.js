//! Conditions

//const num1 = Number(prompt("Bir sayi giriniz"))
//const num2 = 5
// console.log(num1, typeof num1);
// console.log("Toplam", num1 + num2); // string birlestirme (concatination)




// const sayi1 = 2
// const sayi2 = 1
// const sayi3 = 3

//! 1.yöntem built-in fonks yardimiyla
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("enBuyuk:", sayi1);

//! 2.yöntem (nested if)
// if (sayi1 >= sayi2) {
//     if (sayi1 >= sayi3) {
//     console.log("enBuyuk", sayi1);
//     }
// }

// if (sayi2 >= sayi1) {
//     if (sayi2 >= sayi3) {
//     console.log("enBuyuk", sayi2);
//     }
// }

// if (sayi3 >= sayi1) {
//     if (sayi2 >= sayi3) {
//     console.log("enBuyuk", sayi3);
//     }
// }

//! 3.yöntem (Logic operatorler ile )

// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//     console.log("enBuyuk:", sayi1);
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//     console.log("enBuyuk:", sayi2);
// } else if (sayi3 >= sayi1 && sayi3 >= sayi2) {
//     console.log("enBuyuk:", sayi3);
// } else {
//     console.log("Yanlis islem");
// }

//! 4. yöntem (logic operator ile)

const sayi1 = 5
const sayi2 = 6
const sayi3 = 7

let enBuyuk = sayi1

if (sayi2 > enBuyuk) {
    enBuyuk = sayi2
}

if (sayi3 > enBuyuk) {
    enBuyuk = sayi3
}

console.log("enBuyuk:", enBuyuk);