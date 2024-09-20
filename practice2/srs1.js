class User {

    constructor(name, email, role = 'user') {
        this.name = name
        this.email = email
        this.role = role
    }

    login() {
        console.log(`Пользователь ${this.name} вошел в систему`)
        return this
    }

    logout() {
        console.log(`Пользователь ${this.name} вышел из системы`)
        return this
    }

}

class Admin extends User {

    constructor(name, email, role = 'admin') {
        super(name, email, role)
    }

    deleteUser(user) {
        console.log(`Пользователь ${user.name} был удален админчиком ${this.name}`)
        return this
    }

}

let yegor = new User('Yegor', 'yehoorchik@gmail.com')
yegor.login().logout()
let yura = new User('Yuriy', 'urec_ogyrec@mail.by')
yura.login()
let adminchik = new Admin('Adminchik', 'moderator@gmail.ru')
adminchik.login().logout()
let clown = new Admin('Clown', '44')
clown.login().deleteUser(yura).logout()