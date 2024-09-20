class Book {

    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }

}

class Library {

    constructor(name, books = []) {
        this.name = name
        this.books = books
    }

    addBook(book) {
        this.books.push(book)
        return this
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => {
            return book.author === author
        })
    }

    listAllBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.author} - ${book.pages} pages`)
        })
        return this
    }

}

class LibraryUser {

    constructor(name, library) {
        this.name = name
        this.library = library
        this.borrowedBooks = []
    }

    borrowBook(book) {

        if (!library.books.includes(book)) {
            console.log(`Книга "${book.title}" не найдена в библиотеке "${library.name}"`)
            return this
        }
        if (this.borrowedBooks.length >= 3) {
            console.log(`Пользователь ${this.name} взял максимальное кол-во книг [3]`)
            return this
        }
        if (this.borrowedBooks.includes(book)) {
            console.log(`Книга "${book.title}" уже взята`)
            return this
        }
        this.borrowedBooks.push(book)
        console.log(`Книга "${book.title}" была взята пользователем ${this.name}`)
        return this
    }

    returnBook(book) {

        if (!this.borrowedBooks.includes(book)) {
            console.log(`Книга "${book.title}" не была взята пользователем ${this.name}`)
            return this
        }
        this.borrowedBooks.splice(this.borrowedBooks.indexOf(book), 1)
        console.log(`Книга "${book.title}" была возвращена пользователем ${this.name}`)
        return this
    }

}

let banda4 = new Book('Банда четырёх', 'А.А. Тенигин', 1000000)
let war_and_peace = new Book('Война и Мир', 'Л.Н. Толстый', 150)
let holy_Bible = new Book('Библия', 'А.А. Тенигин', 123456)
let cool_shi = new Book('Mewing. Gyat. W Rizz.', 'Andrew Tate', 127)
let library = new Library('library1', [banda4, war_and_peace, holy_Bible])

library.addBook(cool_shi)
console.log('Книги за авторством Альберта Андреевича:')
console.log(library.findBooksByAuthor('А.А. Тенигин'))
console.log('\n\nВсе книги:')
console.log(library.listAllBooks())

let artem_tyurin = new LibraryUser('Artem Tyurin', library)

artem_tyurin.borrowBook(banda4).borrowBook(war_and_peace).borrowBook(holy_Bible).borrowBook(cool_shi)
console.log()
artem_tyurin.returnBook(banda4).borrowBook(cool_shi)
console.log(artem_tyurin.borrowedBooks)
