console.log("***** SELECTORS *****")


document.title = "FS16 "
//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//? id si add-new-item olan elementi secer
const headerText = document.getElementById("add-new-item")
console.log(headerText);


//! secilen elementin style propertisini manipule ettik
//? hersey key-value seklinde yazilir
document.getElementById("add-new-item").style.color = "blue"
document.getElementById("add-new-item").style.backgroundColor = "yellow"
//? hersey key-value seklinde yazilir
headerText.style.border = "2px solid red"

//! Note propertylerde kebab-case degil camelCase notasyonu kullanilir
// headerText.style = "font-family: tahoma; font-size: 30px"

//? idsi btn olan elementi secer
const addBtn = document.getElementById("btn")
console.log(addBtn);

//? HTML elementlerinin icerikleri okuma ve degistirme 

const htmlLi = document.getElementById("html-li")
console.log(htmlLi);
htmlLi.style.color = "red"

//? bir text elementinin iceregi attribute ler ile degistirilebilir: textContent, innerText, innerHTML
console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5"


document.getElementById("js-li").innerText = "JS"

document.getElementById("react-li").innerHTML = "React JS"
document.getElementById("react-li").innerHTML = "<h2 style='color: blue'> React JS</h2>"

//! inputlarin degerinin okunmasi/yazilmasi

const myInput = document.getElementById("input")
console.log(myInput.value);

// myInput.addEventListener("change", () => {
//     console.log(e);
// })

addBtn.value ="SUBMIT"
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi);  //? HTML Collection

//? HTML collectiondaki her bir elemente indisleme ile erisebilir
console.log(allLi[1].textContent);

//? for yapilari kullanilabilir
for (let li of allLi) {
    console.log(li.textContent);
}

//! array-like grubunda direk array metotları kulanılamamz.
// allLi.forEach((li) => console.log(li))

//? Cözüm olarak array-like gurubu arraye cevrilebilir
const arrAllLi = [...allLi]
console.log(arrAllLi);


//? 1-spread 
arrAllLi.forEach((li) => (li.style.color = "fuchsia"))


//? array.form

Array.from(allLi).map((li) => (li.style.backgroundColor = "green"))


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList); //? HTML Collection

myList[0].innerText = "HTML Dersleri"

document.getElementsByClassName("item-list")[0].style.color = "hotpink"




//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? id almak icin (#)
console.log(document.querySelector("#btn"));
//? class almak icin (.)
console.log(document.querySelector(".item-list"));
//? tag almak icin
console.log(document.querySelector("li")); //? ilk gördügü elementi alir.


//? CSS selectorleri querySelector ile kullanilabilir.
const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3);


const react = document.querySelector(".item-list ul li:nth-child(4)")
console.log(react);

react.style.backgroundColor = "gray"





//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const liste = querySelectorAll(".item-list .list")
console.log(liste);  ///? NodeList
//* querySelectorAll bir nodelist dondurur. Nodelist dahili olarak forEach metodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.
liste.forEach((li) => console.log(li.innerText))