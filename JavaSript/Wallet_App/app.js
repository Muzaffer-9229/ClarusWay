

//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")




//? Variables

let gelirler = 0
let harcamaListesi = []




//* Ekleme Formu

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault()   //!reload u engellemek icin
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler);
    ekleFormu.reset()
    localStorage.setItem("gelirler", gelirler)
    hesaplaVeGuncelle()
})


//* Harcama Formu

//? Selectors

const harcamaFormu = document.getElementById("harcama-formu")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")
const harcamaAlaniInput = document.getElementById("harcama-alani")


const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")


//? Event Listeners

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()  //! reload u engellemek için
    const yeniHarcama = {
        tarih: tarihInput.value,
        miktar: miktarInput.value,
        alan: harcamaAlaniInput.value,
        id: new Date().getTime()
    }
    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomaYaz(yeniHarcama)
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
    hesaplaVeGuncelle()
    

})

//* Harcamayi Doma yaz

const harcamayiDomaYaz = ({id, miktar, tarih, alan}) => {

    // const {id, miktar, tarih, alan} = yeniHarcama
    //* 1.yöntem
    // harcamaBody.innerHTML += `
    //     <tr>
    //         <td>${tarih}</td>
    //         <td>${alan}</td>
    //         <td>${miktar}</td>
    //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    //     </tr>
    
    // `

    //* 2.Yöntem
    const tr = document.createElement("tr")

    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content;
        return td
    }

    const createLastTd = () => {
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td
    }

    tr.append(
        appendTd(tarih),  //tarih td si
        appendTd(alan),  //alan td si
        appendTd(miktar), // miktar td si
        createLastTd()   // cöp kutusu id ekler
    )

    harcamaBody.append(tr) //* son girileni alta ekler
    // harcamaBody.prepend(tr) //& son girileni öne ekler

}


//* Hesap Güncelle


const hesaplaVeGuncelle = () => {

    const giderler = harcamaListesi.reduce(
        (toplam, harcama) => toplam + Number(harcama.miktar),0
    )

    giderinizTd.textContent = giderler
    gelirinizTd.textContent = gelirler
    kalanTd.textContent = gelirler - giderler
}


//? Event Listeners

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []


    harcamaListesi.forEach(harcama => {
        harcamayiDomaYaz(harcama)
        
    });


    gelirinizTd.textContent = gelirler

    hesaplaVeGuncelle()
    tarihInput.valueAsDate = new Date()

   
})

harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target.classList.contains("fa-trash-can"))

    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
        const id = e.target.id
        harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id)
        localStorage.setItem("harcamalar", JSON.stringify)

    }
    
})

temizleBtn.addEventListener("click", () => {
    if (confirm("Tüm veriler silinecek. Devam etmek istiyormusun")) {
        harcamaListesi =[]
        gelirler = 0
        harcamaBody.innerHTML = ""
        localStorage.removeItem("gelirler")
        localStorage.removeItem("harcamalar")
        hesaplaVeGuncelle()
    }
})