"use strict";

//? Örnek

const maaslar = [50000, 35000, 120000, 44000];

let sum = 0;
for (let i = 0; i < maaslar.length; i++) {
  sum += maaslar[i];
  console.log(i, sum);
}
console.log("SUM:", sum);

//? Örnek
//? npotlar dizisindeki notlarin 50´den kücük olanlar ve büyük olanlari 2 ayri diziye kaydediniz

const notlar = [50, 45, 67, 100, 10];

const ellidenkucuknotlar = [];
const ellidenbuyuknotlar = [];

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] < 50) {
    ellidenkucuknotlar.push(notlar[i]);
  } else {
    ellidenbuyuknotlar.push(notlar[i]);
  }
}

console.log(notlar);
console.log(ellidenbuyuknotlar);
console.log(ellidenkucuknotlar);

//! FOR IN

const sayilar = [50000, 35000, 120000, 44000];

let total = 0;
for (let i in sayilar) {
  total += sayilar[i];
}
console.log("AVG:", total / sayilar.length);

const notlar1 = [50, 45, 67, 47, 89, 10];

const ellidenkucuknotlar1 = [];
const ellidenbuyuknotlar1 = [];

for (let i in notlar1) {
  notlar1[i] < 50
    ? ellidenkucuknotlar1.push(notlar1[i])
    : ellidenbuyuknotlar1.push(notlar1[i]);
}
console.log(notlar1);
console.log(ellidenbuyuknotlar1);
console.log(ellidenkucuknotlar1);

//! FOR OF

const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

const strArrayUpperCase = (students) => {
    let toUpperCasedArray = []
  for (let student of students) {
    toUpperCasedArray.push(student.toUpperCase())
  }
  return toUpperCasedArray
};

const myArray = strArrayUpperCase(students);
console.log(myArray, students);

//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];




