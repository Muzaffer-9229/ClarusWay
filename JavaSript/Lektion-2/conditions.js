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

//! Ornek: Condition birleştirme

const yaş = 20;
const cinsiyet = "erkek";
const sağlikli = true;

// string.toLowerCase() ---> built-in fonksiyon (JS icerisinde tanimli olan fonksiyonlar)
const koşul = yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlikli === true;

if (koşul === true) {
	console.log("Askerlik Yapmali");
} else {
	console.log("Askerlik Yapmasi gerekmez");
}
//* if(kosul === true) ===> if(kosul)
//* if(kosul === false) ===> if(!kosul)

const cumle = "bugun günlerden Cumartesi"
const kucukHarfler = cumle.toLowerCase()
const buyukHarfler = cumle.toUpperCase()
console.log(kucukHarfler);
console.log(buyukHarfler);


//!Ternary

const yas = 20

yas >= 18 ? console.log("Askerlik yapmali") : console.log("Askerlik yapmaz");

// if else hali

if (yas > 18) {
    console.log("Askerlik Yapmali");
} else {
    console.log("Askerlik Yapmaz");
}

//* nested ternary
const age = 19

const sonuc = age <= 14 ? "cocuk" : age <= 18 ? "ergen" : "yetiskin"
console.log(sonuc);


let durum = ""
if (age <= 14) {
    durum ="cocuk"
} else if (age <= 18) {
    durum = "ergen"
} else {
    durum = "yetiskin"
}
console.log(durum);

// Örnek
const calismaSüresi = 10
let maas = 30000
//* tek durumlu senaryoda ternary icinde islem yapma
// calismaSüresi >= 10 ? (maas = maas * 1.5) : ""

//* tek durumlu senaryoda ternary'nin degiskene deger aktarmasi islemi
maas = calismaSüresi >= 10 ? maas * 1.5 :""
console.log(maas);

//! Short - Circuit

let salary = 40000
let year = 5
let marriage = true

// Tek condition ve tek durum
year >= 10 && (salary = salary * 1.5)

// 2 condition ve tek durum
year >= 10 && marriage === true && (salary = salary * 1.5)

console.log("Salary:", salary);


// tek durum var ise short-circuit
// 2 durum var ise ternary
// 3-6 arasi durum var ise if-else 
// 6 dan fazla ise switch-case 