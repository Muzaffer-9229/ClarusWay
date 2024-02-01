//! ARRAW

// Arrow func tanimlanmasi
const mesajVer = () => console.log("JS is a Browser language");

// invoke
mesajVer();

// Örnek

const kareAl = (x) => x * x;
console.log(kareAl(3));

// örnek 2

const yasHesapla = (yil) => new Date().getFullYear() - yil;

const yil = Number("Dogum Yili:"); //! Prompt !
console.log(`Yasiniz ${yasHesapla(yil)} dir`);

console.log(new Date());

// Örnek 3

const tekVeyaCift = (num) => {
  let sonuc = "";

  if (num % 2 === 0) {
    sonuc = `${num} ciftdir`;
  } else {
    sonuc = `${num} tekdir`;
  }
  return sonuc;
};

const bilgi = tekVeyaCift(5);
console.log(bilgi);

// Örnek

const kareAl1 = (x) => {
  return x * x;
};

console.log(kareAl1(4));

// Örnek
const mesajVer1 = () => {
  console.log("Süslü arrow");
};

mesajVer1();

console.clear();

//? Örnek  functionlarin baska functionlarla cagrilmasi (hesap makinasi)

const topla = (s1, s2) => s1 + s2;
const carp = (s1, s2) => s1 * s2;
const cikar = (s1, s2) => s1 - s2;
const böl = (s1, s2) => s1 / s2;

const hesapla = (num1, num2, op) => {
  let sonuc = (sonuc = 0);
  switch (op) {
    case "+":
      sonuc = topla(num1, num2);
      break;
    case "*":
      sonuc = topla(num1, num2);
      break;
    case "-":
      sonuc = topla(num1, num2);

      break;
    case "/":
      sonuc = topla(num1, num2);

      break;
    default:
      alert("Yanlis islem");
      break;
  }
  return sonuc;
};

const num1 = +prompt("1.Sayi:");
const op = prompt("Islemi giriniz: +,-,*,/:");
const num2 = +prompt("2.Sayi:");
const sonuc = hesapla(num1, num2,
    op)
