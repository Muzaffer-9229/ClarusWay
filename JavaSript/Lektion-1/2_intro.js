 //! OPERATORS

 //! Aritmatic Operators

 let a = 10
 let b = 2

 console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a / b);
 console.log(a ** 6);  // üs alma islemi
 console.log(a % 2);  // remainder (modules) kalani bulma

 console.log(360 / 60);
 console.log(375 % 60);

 let ressult = 365 / 6
 console.log(ressult);
 console.log(Math.trunc(ressult));
 console.log(ressult.toFixed(2));
 console.log(typeof ressult.toFixed(3));

 // saat ve dakika bulma 

 let time = 375

 let hour = Math.trunc(time/60)
 console.log(hour);

 let minute = 375 % 60
 console.log(`375 dakika=> ${hour}:${minute}`);



 //! INREMENT / DECREMENT
 // Post ve pre olarak ta adlandirilir
 // Post inrement 
 let x = 5
 console.log(x++); // 6
 console.log(x);

 console.log(x--);  //6 yi yazdi bir azaltti
 console.log(x);  // 5

 //pre inrement
 console.log(++x);
 console.log(--x);

 

 //! ASSIGMENT OPERATORS

 let t = 10
 let y = 5


 console.log(t);
 console.log(y);

console.log(t + y);
 console.log(t += y);
 console.log(t -= y);
 console.log(t *= y);
 console.log(t /= y);
 console.log(t **= y);
 console.log(t %= y);

 let m = 18
 let h = 3
 console.log(m + h);



 //! COMPARISON OPERATORS
// Karsilastirma Operatörleri bize boolean ve sonuc döndürür

let c = 2
let d = "2"

console.log(typeof c);
console.log(typeof d);
console.log(c==d);
console.log(c===d);

console.log(c!=d);  //esit degilmi - false 2  2ye esit
console.log(c!==d);  // esit degilmi - true biri string biri number oldugu icin esit degil

console.log(3>=2);



//! LOGICAL OPERATORS

//! AND - &&  ( ve anlamindadir)
// AND mükemmeliyetcidir, hersey True olmali yoksa True deger dönmez

console.log(Boolean("Merhaba"));
console.log(Boolean(0));
console.log(Boolean(2));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));

console.log(0 && [] && 2);
console.log([] && "M" && 5);

console.clear();

//! OR || 
// Herse False olsa bile bir tane true, true döndermeye yeter; hepsi False ise en son false verir

console.log(0 || null || 2 || undefined);

//! NOT
console.log(! null);


