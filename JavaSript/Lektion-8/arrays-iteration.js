
//! For Each method

// Örnek


const sayilar = [4, 5, 1, 4, 6, 9]

sayilar.forEach((x) => console.log(x))

console.log("********");

// Alternatif

sayilar.forEach(yazdir)

function yazdir(x){
    console.log(x);
}

// Örnek 2 parametreli forEach

sayilar.forEach((s , i) => console.log("Deger:",s, "sira:", i))

// Örnek

let sum = 0
sayilar.forEach( (sayi) => (sum += sayi) )
console.log("Sum:", sum);

// 3-Parametreli forEach

const notlar = [40, 50, 10, 40, 60, 90]

notlar.forEach( (not, indis, array) => 
    (array[indis] = not * 1.1))


//! Süslü parantezli olarakta yazilabilir
// notlar.forEach( (not, indis, array) => {
//     array[indis] = not * 1.1
// })

//! forEach return yapmaz (void function)
console.log(notlar);


//! Map Method

// Örnek

//? dizideki isimleri büyük harfe dönüstüren uygulama

const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan"];

const copiedNames = names.map((n) => n.toLowerCase())
console.log(copiedNames, names);

// örnek

const euro = 32.97
const dolar = 30.5

const iPhoneTl = [90000, 75000, 60000, 40000, 30000]

const iPhoneDolar = iPhoneTl.map((tl) => Math.trunc(tl / dolar))
const iPhoneEuro = iPhoneTl.map((tl) => Math.trunc(tl / euro))

console.log(iPhoneDolar);
console.log(iPhoneEuro);


//! Filter Method

const maaslar = [90000, 75000, 60000, 40000, 30000]

//maaslar 50000 den büyükler
const ortalamaMaaslar = maaslar.filter((m) => m >= 50000)
console.log(ortalamaMaaslar);

// maaslar 
const düsükMaaslar = maaslar.filter((m) => m >= 30000 && m < 50000)
console.log(düsükMaaslar);


// maasi 50000 den az olana %20 zam yapalim (orginal diziyi degistirerek)
maaslar.map((m, i, arr) => {
if( m >= 30000 && m < 50000) {
    arr[i] = m * 1.2
}
 })
 console.log(maaslar);