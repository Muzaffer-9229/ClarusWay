// Cikti almamizi saglayan yapilar

console.log("intro js icindeyiz");
console.error("Hata Mesaji")
console.warn("UYARI")

//! alert uyari olusturmak icin kullanilir

// alert("Lütfen adinizi giriniz")

//! document.write

document.write("JAVASCRIPT INTRO")

//cevap = confirm("Cikmak istediginize eminmisiniz?")
//console.log(cevap);

//! Variablas

x = 15
ad = "Helen"
yas = 40

console.log(yas);

/* JAVASCRIPT de Degiskenler
const let 
ES6 dan sonra gelen yapilardir
Degisken tanimlama icin kullanilir */

//! CONST
// Const : Constant : Sabit
const tckimlik = "123234242424242"

//! LET
let toplam = 0
x = 60
y = 70
toplam = x + y
console.log(toplam);

// GLOBAL ALAN 
// Program icinde her zaman ulasilabilen ortak alandir

//LOCAL ALAN
// bir block icidir. { } ile ifade edilen bölümler blocklardir if blogu, while, for

// Burasi global alan

const sayi = 5
{
    //burasi local alan
    console.log(sayi);
    const pi = 3.14
    console.log(pi);
}
// console.log(pi)

//! VAR her yerden erisebilir yeniden tanimlanabilir ES6 dan önce kullanilir

var number = 90
{
    console.log(number);
    var number = 50
}
console.log(number + 15);

//! DATA TYPES

x = 15
console.log(typeof x);

console.clear();


/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas = 40
sayi1 = 56
console.log(yas);

sonuc = (sayi1*5) + 6
console.log(sonuc);

const pi = Math.pi
console.log(pi);


// Ondalikli kismi düzenlemek icin kullanilan yöntemler 
// round

let yuvarlanmisSonuc = Math.round(sonuc)
console.log("sonuc", sonuc);
console.log(yuvarlanmisSonuc);

//trunc 
let truncSonuc = Math.trunc(sonuc)
console.log(truncSonuc);

// Virgülden sonra gelen ondalikli kisimda kac hane göstermesini istiyorsaniz toFixed, toFixed sonucu stringdir 

let FixedSonuc = sonuc.tofixed(2)
console.log(FixedSonuc(2));
console.log(FixedSonuc)



//! RANDOM methodu

//rast gele sayi üretmek icin kullanilir 
// 0-1 arasinda bir sayi üretir

console.clear()
console.log(Math.round(Math.random()*100))

console.log(Math.pow(5,3));  //kuvvet alma
console.log(Math.sqrt(144));  //karekök



//! STRINGS

ad = "John"

let str1 = "Merhaba dünya bugün 17 Ocak"
let str2 = 'Merhaba Dünya'
let str3 = `merhaba dünya ${ad}`
let str4 = new String("Merhaba Dünya")

console.log(str2);
console.log(str3);

console.log(str1[4]);

// string bu sekilde icindeki degere ulasilabilir ama degistirilemez (immutable)
str1[4] = "ü"

str = "Merhaba FS16"
console.log(str1);


let kimlik = 2353636363
let adSoyad = "John Smith"

console.log("Personelemiz " ,adSoyad, "'in Kimlik numarasi: ", kimlik);
console.log(`Personelimiz ${adSoyad}'in Kimlik Numarasi: ${kimlik}`);




//! BOOLEAN
// True yada False degeri turtar

let deger = 0
console.log(Boolean(deger));

let kontrol = (sifre = "12x45")
console.log(Boolean(kontrol));

if (isOpen == "12x45") {
    console.log("Sisteminiz Acik");
}
else{
    console.log("Sisteminiz Kapali");
}


//! NULL 

let personel = null
console.log(typeof null);

console.log(Boolean);


//! UNDEFINED

let fonNumber;
console.log(fonNumber);

fonNumber = "+9023242425"
console.log(fonNumber);

function sum(){
    return "toplam=4"
}
 console.log(sum());

 //! NaN Not a Number


let n;
let result = n + 15
console.log(result);

console.log(isNaN(result));

//NAN PRIMITAVE
// Array, Object, FUNCTION

//Aray
let personalList = ["Ali", "Ayse", "Sema"]
//object
let personalData = {name:"Ali", surname:"Güven", age:"45"}
// Function
function sum(){
    return "toplam=4"
}
 console.log(sum());







