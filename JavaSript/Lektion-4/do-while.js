//! DO - WHILE

let sayac = 12
do {
    console.log("Chort16", sayac);
    sayac++
    console.log(sayac);
}while(sayac <= 10)

console.log("Döngü Bitti");


// Örnek
let devam = ""
do {
let vize = Number(prompt("Lütfen vize Notunuzu giriniz: "))
let final = Number(prompt("Lütfen final Notunuzu giriniz: "))

let ortalama = vize * 0.3 + final * 0.7

const sonuc = ortalama >= 50 ? `${ortolama}"gecti"` : `${ortolama}"Kaldi"`
console.log(sonuc);

devam = prompt("Hesaplamaya devam etmek istermisiniz e/h")}while (devam === "e" || devam === "E")
console.log("Uygulama kapaniyor");