//! Döngüler Loops WHILE


// Örnek 1
/*let i = 1
while(i <= 10) {
    let i = 1
    console.log(i,"Chort16");
    i++;
} */

for(let i=1; i<=10; i++) {
    console.log(i, "Chort16");
}
console.log("Dongü bitti");

// Örnek 2

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//! Tek başına karar yapıları ile tekrarlama işlemi yapılamaz.
//! Tekrar varsa döngu var demektir.
//! karar yapısı kontrol eder ve duruma gore programın akışını yönlendirir ama tekrar yaptırmaz.

// let sayi = +prompt("0-100 arasinda bir sayi griniz:")

// let sayi = +prompt("0-100 arasinda bir sayi giriniz")

// if (sayi < 0 || sayi > 100) {
//     alert("sayi 0-100 arasinda degil")
// }

/*let sayi1 = +prompt("0-100 arasinda bir sayi giriniz")
let exit = false          //flag mechanism
while (sayi1 < 0 || sayi1 > 100) {
    console.log("Girilen 0-100 arasinda olmalidir");
    sayi1 = prompt("0-100 arasinda bir sayi giriniz veya cikmak icin Q tusuna basiniz")

    if (sayi1 === "q") {
        exit = true
        break
    }
}

exit ? console.log("cikis yapildi") : console.log("Girilen sayi", sayi1);*/

// let sayi1 = +prompt("0-100 arasinda bir sayi griniz:")
// let cikis = false //?Flag mechanism
//  while (sayi1 < 0 || sayi1 > 100) {
//    console.log("Girlen sayi 0-100 arasında olmalıdır")
//    sayi1 = prompt(
//      "0-100 arasinda bir sayi griniz veya çıkmak için Q tuşuna basiniz:"
//    )
//    if (sayi1 === "q") {
//      cikis = true
//      break
//    }
//  }
// cikis ? console.log("Cikis yapildi") : console.log("Girilen sayi:", sayi1)


let sayi2 = +prompt("0-100 arasinda bir sayi griniz:")
let cikis1 = false //?Flag mechanism
for (; sayi2 < 0 || sayi2 > 100; ) {
  console.log("Girlen sayi 0-100 arasında olmalıdır")
  sayi2 = prompt(
    "0-100 arasinda bir sayi griniz veya çıkmak için Q tuşuna basiniz"
  )
  if (sayi2 === "q") {
    cikis1 = true
    break
  }
}
cikis1 ? console.log("Cikis yapildi") : console.log("Girilen sayi:", sayi2)