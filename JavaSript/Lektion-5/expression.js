//! Functionens 2 - Expression


// Örnek

const tekVeyaCift = function (num) {
    let sonuc = ""

    if (num % 2 === 0) {
        sonuc = `${num} ciftdir`
    } else {
        sonuc = `${num} tekdir`
    } 
    return sonuc
}

const bilgi = tekVeyaCift(5)
console.log(bilgi);
console.log(tekVeyaCift (4));


// Örnek 2

function usAlma (taban, us) {
    return taban ** us
}


const usAl = function (taban, us) {
    return taban ** us

}


const us = usAl(3,4)
console.log(us);
console.log(usAlma(3, 4));


// Örnek 3
const daireAlanHesapla = function (r) {
    return Math.PI * r * r
}
const r = Number(("r:"))            // !promt!
const sonuc = daireAlanHesapla (r)
console.log(`DAirenin Alani = ${sonuc}`);

daireAlanHesapla = 5

console.log(daireAlanHesapla(4));






