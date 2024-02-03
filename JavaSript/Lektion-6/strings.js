//! STRINGS

//? String olusturma yöntemleri

const str1 = "new string"
const str2 = 'new string'

const deger = "Merhaba"
const str3 = `new string ${deger}`   //backtickler ile template litarel
const str4 = new String("new String")

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

console.log("🚐🚘🛼🚲🚋");


//? Escape Characters

// \ escape karekterler \ ile kullanilir
// \ hemen yanindaki karekteri göz ardi edilmesini saglar

let metin = 'ömer\'in kalemi'
let path = "c: \\Users\\Kullanicilar"
console.log(path);   // users\kullanicilar

// \n new line => bir alt satira gecmesini saglar
// \t tab boslugu verir (8 Karekterlik bosluk)
const parag = "\tMerhaba Cohort 16 sakinleri\nGününüz güzel gecsin"
console.log(parag);


// Unicode karekterleri icin

console.log("\u2615");
console.log("\uD83C\uDF39");
console.log("\uD83D\uDCB2");
console.log("\u00A9");

console.log(`     Merhaba Cohort 16 sakinleri 🎈
Gününüz güzel gecsin`);



/* --------------------------------------------------------- */


//! STRINGS YAPISI VE INDEXLEME

let course = "Clarusway"
console.log(course);

console.log(course[0]);
console.log(course[4]);
console.log(course[7]);

// Immutable - not mutable
course[4] = "a"  //degisim yapilamaz
course = "Clarusway Bootcamp"
console.log(course);

for (let i= 0; i<=17; i++){ 
console.log(course[i]);
}


//! STRINGS PROPERTY AND METHODS

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? length
//?prototype

console.log(course.length);

for (let i=0; i < course.length - 1; i++){
    console.log(course[i]);
}

const emoji = "🚲"
console.log(emoji.length);

//! STRING METHOD

// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.


//! String birlestirme 

const name = "John"
const surname = "Due"
const job = "Developer"

// +
console.log("Our Customer's name: "+name+" surname: "+surname+" and his job: "+job);

console.log(`Our Costumer's name:${name} surname: ${surname} and his Job: ${job}`);

const fullname =name.concat(surname)
console.log(fullname);


// toLowerCase()
// console.log(fullname.toLowerCase());

// const giris = "Clarusway"
// const girisKodu = prompt("Giris kodunu giriniz: ")

// if (giris === girisKodu.toLocaleLowerCase()){
//     console.log("Girisiniz Onaylandi");
// }
// else{
//     console.log("giris hatali");
// }

// toUpperCase( Büyük harfe cevirir)

const statement = "Güzel bir gün, kahve ve hurma ile iyi gidiyor"
console.log(statement.toLocaleUpperCase());
console.log(statement);


//! STRING PARCALAMA

// split() parcaladigi bölümlöeri diziye cevirir
// str.split(seperator) => seperator bir ayrac "", " ", ", ", "/"


let text = "Clarusway It Bootcamp"
console.log(text.split(""));
const splittedText = text.split(" ")
console.log(splittedText);
console.log(splittedText[2]);

for (let i = splittedText.length-1; i>=0; i--){
    console.log(splittedText[i]);
}

let months = "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct /Nov / Dec"

console.log(months.toLowerCase().split("/"));

let liste = "HArry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand"
let yeniliste = liste.split(";")
console.log(yeniliste[2]);

// dikkat jpoin ve reverse string metodu degildir ama splitle cok kullanilir

let cumle = "Merhaba Degerli Cohort 16 sakinleri"
// bu cümleyi tersten string olarak yazin
let yeniCumle = cumle.split(" ")
console.log(yeniCumle);

//reverse tersten yazdirma - Array metodu
console.log(yeniCumle.reverse());

// Join Array metodu
console.log(yeniCumle.reverse().join(" - "));

// Polindron kelime : girilen kelime polindrom mudur

// let kelime = prompt("kelime Girin:")
// let tersten = kelime.split("").reverse().join("")
// console.log(tersten);

// kelime === tersten ? console.log(Polindrom) : console.log("Polindrom degil");

console.clear();
/* ----------------------------------------------- */


//! Slice

//? String içinde bir bölümü almak için kullanılır. (immmutable, kalıcı değişiklik olmaz)
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))


let ataSoz = "Oku da adam ol"
console.log(ataSoz.slice(7,11));
console.log(ataSoz.slice(7));

// tersten de erisim saglanabilir : negativ deger kullanilir

console.log(ataSoz.slice(-6,-2));

//! subString(baslangic index numarasi bitis index numarasi)
//slicede tek farki negativ deger kullanmaz
console.log(ataSoz.substring(3,8));


//! Stringde degisiklik yapma 

//? replace(aranan degistirelecek) - replaceAll (aranan Hepsi )

let ozlusoz = "Tecrübe tarak gibidir; ama hayat insana kel oldugu zaman verir"

console.log(ozlusoz.replace("kel", "sacli"));

let variable = "kullanici adi"
let yeni = variable.replace(" ", "_:")
console.log(yeni);

let yeniDeger = yeni.replaceAll("i", "ü")
console.log(yeniDeger);


console.clear();

/*--------------------------------------- */

//! String icinde arama islemleri

// includes, indexOf, search ,match() metodlarını kullanabiliriz

console.log(`ozlusozde tarak kelimesi geciyormu: ${ozlusoz.includes("tarak")}`);

let url = "https://clarusway.com"

let msg = url.includes("https") ? "Bu Site güvenilir" : "Bu Site güvenli degil"

console.log(msg);

let email = "helenclarusway.com"
msg = email.includes("@") ? "Mail adresi gecerli" : "Mail adresi gecersiz"
console.log(msg);

//! indexOf (aranacak Metin)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir.

console.log(email.indexOf("co"));


console.log(email.indexOf("edu"));

msg = email.indexOf("edu") === -1 ? "bu bir egitim sitesi degildir" : "bu bir egitim sitesidir"

console.log(msg);

//! search()


let metin1 = "Clarus it Bootcamp. Clarusway develop you IT field"

console.log(metin1.search("IT"));
console.log(metin1.search("it"));


//regex - Regular Expression
// / ile ifade edilir
// /g => global, butün cümle icinde uygula
// /i => case sensitive özelligini kaldirir kücük büyük olmasina bakmadan bulur

console.log(metin1.search(/IT/gi));
console.log(metin1.replace(/IT/gi, "Communication"));


//! Match

let metin2 = "Bugün gercekten cok güzel, hafif serin bugün"
console.log(metin2.match(/bugün/gi));

let degistirilmisMetin = metin2.match(/[e]/gi)
console.log(degistirilmisMetin);


//! Trim

let sentence1 = "     Clarusway  "
console.log(sentence1.trim());

metin = "Clarusway"

console.log(metin.startsWith("c"));
console.log(metin.endsWith("y"));