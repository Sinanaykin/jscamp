
function addToCart(productName,quantity) {
    console.log("ürün:" + productName +  "adet:"  + quantity)
    
}
addToCart("elma",10); 



let sayHello = () =>{ //fonksiyonu değişkene atadık

    console.log("Hello World")
}

 

let product1= {productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün:" + product.productName)
}

addToCart3(product1)



let x=function (...products) { //rest=birleştirme
    console.log(products)
}
x("Ali","Ahmet","Veli")



let numbers=[10,20,3,0,40,25,60]

console.log(Math.max(...numbers)) //spread=ayırma