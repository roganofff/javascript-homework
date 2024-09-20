function Customer(name, email) {
    this.name = name
    this.email = email
}

function Product(name, price) {
    this.name = name
    this.price = price
}

function Order(products = [], customer) {
    this.products = products
    this.customer = customer
    this.totalPrice = 0

    products.forEach(
        product => {
            this.totalPrice += product.price
        }
    )
}

Order.prototype.calculateTotal = function() {
    this.products.forEach(
        product => {
            this.totalPrice += product.price
        }
    )

    return this.totalPrice
}

Order.prototype.addProduct = function(product, quantity = 1) {
    for (let i = 0; i < quantity; i++) {
        this.products.push(product)
    }

    this.totalPrice += this.calculateTotal()

    return this
}

Order.prototype.printOrder = function() {
    console.log(`Заказ для ${this.customer.name} (${this.customer.email}):`)
    console.log('Товары:')

    this.products.forEach((product, index) => {
        console.log(`${index+1})`, `${product.name} ($${product.price})`)
    })
    console.log(`Цена: $${this.totalPrice}`)

    return this
}

let vaska = new Customer('Vasisiy', 'vaska@mail.ru')
let vanka = new Customer('Vaniliy', 'vano@gmail.com')

let barabolya = new Product('Бараболя', 100)
let reactor = new Product('Ядерный реактор', 150)
let grushes = new Product('Груши (спелые)', 200)
let layno = new Product('Груши (гнилые)', 250)

let order1 = new Order([barabolya, reactor, grushes], vaska)
let order2 = new Order([grushes], vanka)

order2.addProduct(layno)
console.log(order1.calculateTotal())
order1.printOrder()
console.log()
order2.printOrder()
