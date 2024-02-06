//! Dizi erisim Metotlari

const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"]

//* includes()
//*------------------------------------------------------

console.log(numbers.includes("4")); //* true
console.log(numbers.includes("44")); //* false
console.log(numbers.includes("Bes")); //* false
console.log(numbers.includes("BES".toLowerCase())); //* true
console.log(numbers.includes("four", 6)); //* false

//* indexOf() lastIndexOf()
//* ilk eslesen indexi dondürür bulunmazsa -1 döndürür

console.log(numbers.indexOf("bes")); //* 4
console.log(numbers.lastIndexOf("bes")); //* 11
console.log(numbers.indexOf("bes", 5)); //* 8
console.log(numbers.indexOf("beslik")); //-1 bulunmayan birseyde

if (numbers.indexOf(66) < 0) {
    console.log("aranan bulunamadi");
}else{
    console.log(`Aradiginiz sayi ${numbers.indexOf(66)} indisinde bulunmustur`);
}


//* join() dizinin elamanlarini birlestirip stringe cevirir
const joinedArray = numbers.join(" ")
console.log(joinedArray);

//* toString() fonksiyonu sadece dizinin elamanlarinin aralarina (virgül) koyarak birlestirir ve string yapar

console.log(numbers.toString());

//*concat()
const message = ["the weather", "is", "very", "nice"]
const time = new Date().toDateString()
console.log(time, message);

const concatedArray = message.concat("hello", time, "JS")
console.log(concatedArray);


console.log(concatedArray.reverse().join(" "));

// slice()