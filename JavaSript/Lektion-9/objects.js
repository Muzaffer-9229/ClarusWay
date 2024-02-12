


const ogrIsim =["ahmet","ismet","saffet"]
const ogrSoyisim=["yilmaz","can","baki"]
const ogrAdres = ["kadiköy","şeebinkarahisar","seferihisar"]

console.log(`${ogrIsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]}`);


const kisi = {
    isim: "Ahmet",
    soyIsim: "Yilmaz",
    kimlikNo: "01234511112",
    maas: 70000,
    ehliyet: true,
    diller: ["english", "arabic", "urartuca"],
    notlar: {mat101: "AA", tur101: "BB", ECE101: "AA"},
    dogumTarihi: 1990,
    yasHesapla: function () {
        return new Date().getFullYear() - this.dogumTarihi
      },
}
//! this keywordu icerisinde bulundugumuz objeyi refere eder.
//! Global alanda yazilan this ise haliyle global abjeyi refere eder. window tarayicinin herseyini barindiran bir objedir.



console.log(this);   //global alanda (window nesnesini gösterir)

//? OKUMA

// A-) . notasyon erisim
console.log(kisi.isim);
console.log(kisi.maas);
console.log(kisi.diller[2]);
console.log(kisi.notlar.ECE101);


console.log(kisi.yasHesapla);

// B-) Squre bracket ile erisim
console.log(kisi["kimlikNo"]); 
console.log(kisi.kimlikNo);
console.log(kisi["notlar"]["tur101"]); // AA


//prompt
// const secici = prompt("kisinin hangi bilgisini ogrenmek istersiniz ? isim, soyIsim,kimlikNo, maas, dogum, yashesapla")

// console.log(kisi[secici]); //! square bracket yönteminde key bir degisken olabilir
// console.log(kisi.secici);  //! . notasyonunda key bir degisken olamaz


console.log(kisi);


// YAZMA

kisi.dogumTarihi = 2000

console.log(kisi);

kisi.diller = "Türkce-Ingilizce"
kisi.kilo = 80

console.log(kisi);

kisi["ehliyet"] = false



//! Nested Objects

// objeler itere edilebilir yapilar degildir.

const kisiler = {
    ahmet: {   
    soyIsim: "Yilmaz",
    kimlikNo: "01234511112",
    maas: 70000,
    },

    mehmet: {
    soyIsim: "Öztürk",
    kimlikNo: "01234565458",
    maas: 50000,
    },
    
}

console.log(kisiler.ahmet.kimlikNo);
console.log(kisiler["mehmet"]["maas"]);

const isim = "ahmet"
console.log(kisiler[isim]);


//! JSON => JAvaScript object Notation


const people = [
    {isim: "Ahmet", 
    soyIsim: "Yilmaz",
    kimlikNo: "01234511112",
    maas: 70000,
    job: "developer"
    },

     {isim: "Mehmet",
    soyIsim: "Öztürk",
    kimlikNo: "01234565458",
    maas: 50000,
    job: "developer"
    },

    {isim: "Canan",
    soyIsim: "Can",
    kimlikNo: "65856565458",
    maas: 90000,
    job: "tester"
    },
    
]

// (prompt)
// const key =  prompt("Kisilerin hangi bilgisini ögrenmek istersiniz: isim, soyIsim, kimlikNo, maas")
// people.forEach((p) => console.log(p.isim))
// people.forEach((p) => console.log(p.maas))
// people.forEach((p) => console.log(p["kimlikNo"]))
// people.forEach((p) => console.log(p[key]))

//Maaslarin Toplami
const toplamMaas = people.reduce((t, p) => t + p.maas, 0)
console.log(toplamMaas);


//? job, developer olanlarin isim+soyisim yazdiriniz

const devs = people.filter((p) => p.job === "developer")
console.log(devs);

const devsName = people.filter((p) => p.job === "developer").map((p) => `${p.isim}  ${p.soyIsim}` )
console.log(devsName);