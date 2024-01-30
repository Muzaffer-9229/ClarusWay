"use strict";
//! Function Declaration

// Fonksiyonun tanimlanmasi (hoisted)
//paremetresiz (disaridan bir deger almiyor)
function selamla(){
    console.log("selam Chort16");
}

selamla ()  //Invoke (Call)

// Parametreli Function

function selamVer(chort, ders){
    console.log(`Merhaba ${chort} - ${ders}` );
}
selamVer("Chort16", "javascript")
selamVer("Cohort15", "CSS")


// örnek

function topla(s1, s2){
    console.log("toplam: ", s1 + s2);
}

const s1 = +prompt("S1: ")
const s2 = +prompt("S2: ")
topla(s2, s1)
