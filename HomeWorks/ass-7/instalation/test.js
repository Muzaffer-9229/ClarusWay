




const getProductsData = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>listProducts(json))
}
const listProducts = function(data) {
    const template = ` `

}

window.addEventListener("load", getProductsData)