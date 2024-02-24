"use strict"

//pc ye 1-20 arasinda bir sayi tutturduk
let rasgeleSayi = Math.ceil(Math.random()*20);

let mesaj = document.querySelector(".msg");

let skor = 10;
//skoru htmlden cekebilirdik ama cok kullnacagimiz icin bu daha tercih edilen bir durum
let enYuksekSkor = 0;


document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value

    //! Tahmin girmeden butona basildiysa
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayi giriniz..."
    //! Tahminim Dogruysa    
    }else if (tahmin === rasgeleSayi) {
        mesaj.textContent = "Tebrikler bildiniz..."
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector("number").textContent = rasgeleSayi;



        // top-score Kontrölü yap
        if (skor > enYuksekSkor) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = skor
        }
    //! Tahmin yanlissa
    }else{
        // ?skor birden büyük oldugu sürece hakkim var
        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor
            tahmin < rasgeleSayi ? mesaj.textContent = "Artir" : mesaj.textContent = "Azalt"
        } else {
            // GAme Over
            mesaj.textContent = "Oyunu Kaybettiniz"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"

        }

    }

} )

// Again butonuna nasinca ayarlar baslangic degerlerine kurulsun Arka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundColor = "2d3436"
    rasgeleSayi = Math.ceil(Math.random() * 20)
    console.log("yeni rastgele sayi", rasgeleSayi);

    skor = 10;

    document.querySelector(".score").textContent = 10

    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = "";

    mesaj.textContent = "Oyun yeni oyuncu icin basliyor..."
}

//! Enter tusu calissin

//Klavyede enter butonuna basildiginda check buttonunu tetikle

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.querySelector(".click").click()
    }
})


