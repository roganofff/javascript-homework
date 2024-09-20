// 2
function Product(name, price){
    this.name = name
    this.price = price
}

function ShoppingCart(){
    this.products = []
}

ShoppingCart.prototype.addProduct = function(pr) {
    this.products.push(pr)
}

ShoppingCart.prototype.removeProduct = function(pr) {
    index = this.products.indexOf(pr)
    this.products.splice(index, 1)
}

ShoppingCart.prototype.getTotalPrice = function() {
    sum = 0

    for (let i = 0; i < this.products.length; i++) {
        sum += this.products[i].price
    }

    return sum
}

ShoppingCart.prototype.checkout = function() {
    console.log(`Цена: ${this.getTotalPrice()}`)
    console.log('Продукты:')

    for (let i = 0; i < this.products.length; i++) {
        console.log(`${i+1})`, this.products[i].name)
    }

    this.products = []
}

let prod1 = new Product('бараболя', 47)
let prod2 = new Product('кріб', 199)
let prod3 = new Product('USB-C - Ligthning cabel', 589)
let cart = new ShoppingCart()
cart.addProduct(prod1)
cart.addProduct(prod2)
cart.addProduct(prod3)
console.log(cart.getTotalPrice())
console.log(cart.products)
cart.checkout()
console.log(cart.products)