// Напишите функцию isPrime, которая принимает число в качестве аргумента и возвращает true, 
// если число простое, и false в противном случае.
// Вызовите функцию для чисел от 2 до 20 и выведите результат в консоль для каждого числа.

function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

for (let number = 2; number <= 20; number++) {
    isPrime(number) ? console.log(number + ' is prime') : console.log(number + ' is composite');
}

// Создайте массив из 10 случайных чисел.
// Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: 
// min — минимальное значение в массиве, max — максимальное.
// Вызовите функцию для созданного массива и выведите результат в консоль.

function findMinMax(randNums) {
    let min = randNums[0];
    let max = randNums[1];
    for (const number of randNums) {
        if (min > number) {
            min = number;
        } else if (max < number) {
            max = number;
        }
    }

    return {
        min: min,
        max: max,
    }
}

let randoms = [];

for (let i = 0; i < 10; i++) {
    randoms.push(Math.floor(Math.random() * 20));
}

console.log(randoms)
console.log(findMinMax(randoms))

// Создайте объект user, который содержит информацию о пользователе: имя, возраст, email.
// Напишите функцию displayUserInfo, которая принимает объект пользователя и выводит его данные в виде строки:
// "Имя: {name}, Возраст: {age}, Email: {email}".
// Добавьте в объект метод greet, который выводит приветственное сообщение, например: "Привет, {name}!".
// Вызовите метод для созданного объекта.

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    greet() {
        console.log('Привет, ' + this.name);
    }
}

function displayUserInfo(user) {
    return `Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`;
}

let yegor = new User('Yegor', 18, 'roganov.yv@gmail.com');
yegor.greet();
console.log(displayUserInfo(yegor));

// Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.

let names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < names.length; i++) {
    console.log(`Студент ${names[i]}, ваш порядковый номер: ${i}`);
}

function findLongestName(names) {
    let max = names[0].length;
    names.forEach(name => {
        if (max < name.length) {
            max = name.length;
        }
    });
    return max;
}

console.log(findLongestName(names));

// Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM.
// Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.

function formatDate(date) {
    let day = String(date.getDate());
    let month = String(date.getMonth());
    let year = String(date.getFullYear());

    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());

    if (day.length < 2) {
        day = '0' + day;
    }
    if (month.length < 2) {
        month = '0' + month;
    }
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

let now = new Date(Date.now());

console.log(formatDate(now));

function datesDifference(one, other) {
    return Math.abs(one.getDate() - other.getDate()); 
}

let someDay = new Date('August 19, 1975 23:15:30');

console.log(datesDifference(now, someDay));