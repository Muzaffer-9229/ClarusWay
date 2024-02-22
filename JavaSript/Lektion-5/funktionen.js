"use strict";
//! Function Declaration

// Fonksiyonun tanimlanmasi (hoisted)
//paremetresiz (disaridan bir deger almiyor)
function selamla(){
    console.log("selam Chort16");
}

selamla ()  //Invoke (Call)

// Parametreli Function

// function selamVer(chort, ders){
//     console.log(`Merhaba ${chort} - ${ders}` );
// }
// selamVer("Chort16", "javascript")
// selamVer("Cohort15", "CSS")


// // örnek

// function topla(s1, s2){
//     console.log("toplam: ", s1 + s2);
// }

// const s1 = +prompt("S1: ")
// const s2 = +prompt("S2: ")
// topla(s2, s1)


// Örnek 2

function carp(num1,num2) {
    return num1 * num2;
}

const sonuc = carp(3, 5)
console.log(sonuc);


function hesapla(num1, num2, islem) {
    if (islem === "+") {
      return num1 + num2
    } else if (islem === "-") {
      return num1 - num2
    } else {
      return 0
    }
  }
  
  const total = hesapla(3, 5, "+")
  console.log(total)
  
  console.log(hesapla(4, 2, "-"))