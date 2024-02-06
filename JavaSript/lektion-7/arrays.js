"use stricht ";

//! Arrays

//Dizi Tanimlama

//! Square bracket (Array Literal)
const names = [
  "Ahmet",
  "Ismet",
  "Saffet",
  "Can",
  true,
  6,
  [1, 3],
  "Ara Vakti",
  "Ders Basladi",
  "Bir sonraki ara geldi",
];
console.log(names);
console.log("Uzunluk", names.length);
console.log(typeof names); //* object

//* >Diziden Veri Okuma-Yazma (indexleme)

console.log(names[3]); //? CAn
console.log(names[4]); //? true
console.log(names[6][0]); //? 1

//* Dizinin son elamani bir degiskine saklayalim

// const lastElement = names[7] //? Hard code
const lastElement = names[names.length - 1];
console.log(lastElement);

//? Yazma
names[4] = "Canan";
console.log(names);
names[0] = "Mehmet";
names[5]++;
console.log(names);

names[2] = names[2].toLocaleLowerCase();
console.log(names);

// names = [4, 6, 7] //!Uncaught TypeError: Assignment to constant variable

//! 2. Yöntem (Object Constructur)

const programmingLangs = new Array("GO", "JS", "JAVA");
console.log(programmingLangs);

//* 2 elamanlik bos bir array olusturdu eger constructora parametre olarak tek bir sayi (number) girilirse, construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur
const myArr = new Array(2); //? [empty x 2]
console.log(myArr);

//! 3. Yöntem

const sayilar = Array.of(4);
console.log(sayilar);

console.clear();
//! Dizileri degistiren mutotor metotlar

const cars = ["BMW", "Mercedes", "Audi", "Togg", "Anadol", "Devrim"];

cars[cars.length] = "Sahin";
console.log(cars);

//* push( Dizinin sonuna eleman ekliyor ve dizininin elaman sayisini döndürür
cars.push("Kartal");
console.log(cars);

//* pop() son elamani siler ve sildigi elamani döndürür
const deletedCar = cars.pop();
console.log(deletedCar, cars);

//* shift() dizinin 0. indeks elamanini siler ve silinen elamani döndürür

const bmw = cars.shift();
console.log(bmw, cars);

//* unshift() diziniin 0. indeksine eleman ekler ve dizinin son elaman sayisini döndürür
const newEl = cars.unshift("Toros");
console.log(cars, newEl);

//* slice()
// 1.parametre eklenecek index numarasi
// 2.parametre 0 ise araya ekleme 1 ise üzerine yazma
// 3. parametre yeni eklenecek veri
cars.splice(1, 0, "Porsche");
console.log(cars);

cars.splice(4, 0, "Serce", "Tofas");
console.log(cars);


//* reverse()
cars.reverse()
console.log(cars);

//* sort()

//* sort metodu diziyi iterasyona ugratir ve ascii karektere göre siralama yapr. dolayisiyla stringle dogru sekilde siramala yapabilir
cars.sort()
console.log(cars);
cars.reverse()
console.log(cars);


//* Ancak sayilar ile dogrudan siralama yapilirsa ascii den dolayi yanlis degerler siralanmis olabilir
const numbers = [3, 2, 22, 6, 1, 11, 9, 3]

//callback function
numbers.sort( (a, b) => a - b ) //* asc kücükten büyüge
numbers.sort( (a, b) => b - a ) //* Desc büyükten kücüge
console.log(numbers);

//* fill()

const degerler = [2 ,1 ,4, 33, 7, 9, 22]
degerler.fill(0)
degerler.fill(77, 3) //* 1.paremetre deger
degerler.fill(44, 3, 5)
console.log(degerler);


//* Döngü
// for(let i = 0; i < degerler.length; i++){
//     degerler[i] = 55
// }
// console.log(degerler);