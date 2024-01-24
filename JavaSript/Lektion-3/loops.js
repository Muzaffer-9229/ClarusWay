              //! LOOPS
               // for
//? for döngüsünde kosul cümlesinde == veya != operatorlerini kullanmak sonsuz veya girilmeyen döngüye yol acmasi muhtemeldir, bu sebeble genelde <, >, <=, >= islemleri kullanilir.

//!girilmeyen döngü
// for( let i= 1; i == 50; i = i * 2) {

// }
//! sonsuz döngü
// for( let i= 1; i != 50; i = i * 2) {

// }

//! Örnek 50 kisinin notunu girerek ortalamasi hesaplayan kodu yaziniz

// let sum = 0
// let i = 0
// for(i; i < 2; i++) {
//     const grade = Number(prompt(`Enter ${i + 1}. grade:`))
//     sum = sum + grade
//     console.log(sum);
    
// }
// console.log(i);
// console.log(`AVG:${sum / i }`);


//! geri yönde degisim

for (let i = 10; i >= 0; i--) {
    console.log(i)
}


//! Aralik verme

let n1 = 4
let n2 = 6
let sum = 0

if (n1 > n2) {
     console.log("n2 should be bigger than n1");
} else {
     for (let i = n1; i <= n2; i++) {
         sum += i
     }
     console.log("SUM", sum);
}

// if (n1 > n2) {
//     console.log("n2 should be bigger than n1");
// } else {
//     for (n1; n1 <= n2; n1++) {
//         sum += n1
//     }
//     console.log("SUM", sum);
// }


//! Break - Continnue

for (let i = 0; i <= 10; i++) {
    if (i % 3) {
        continue
    }
    
    if (i === 7) {
        break
    }
    console.log(i);
}

