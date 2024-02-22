console.log("**** CREATE NODE ****")

//? 1-yeni bir li elementi olusturur
const newLi = document.createElement("li")

//? 2-Eger text tabanli bir element ise text dugumunu olusturur
const textLi = document.createTextNode("Go")

//? 3- olusturulan text dügümünü yeni elemente ekler (append)
newLi.appendChild(textLi)

//? 2. bir li olusturalim
const newLi2 = document.createElement("li")
newLi2.textContent = "C++"

//? 4-yeni olusan elementi DOM treeye ekler
document.querySelector("ul").appendChild(newLi)


//? Element.before() veya element.after() ile bir elementi istediğmiz elementin onune veya devamına eklemek mümkündür.
const react = document.querySelector("ul li:nth-child(4)")

react.before(newLi, newLi2)


// ID, CLASS GIBI ÖZELLIKLERI ATAMA

//? element.attribute = "yeni deger"
newLi.className = "list"
newLi.id = "new-li"
newLi.type = "button"
newLi.name ="list"