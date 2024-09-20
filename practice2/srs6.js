class Expresison {

    constructor(num1, num2, operator) {
        this.num1 = num1
        this.num2 = num2
        this.operator = operator
    }

    evaluate() {
        switch (this.operator) {
            case '+':
                return this.num1 + this.num2
            case '-':
                return this.num1 - this.num2
            case '/':
                if (this.num2 === 0) {
                    throw new Error('Не-а, бро')
                }
                return this.num1 / this.num2
            case '*':
                return this.num1 * this.num2
            case '**':
                return this.num1 ** this.num2
            default:
                throw new Error('Недопустимый оператор')
        }
    }

    toString() {
        try {
            return `${this.num1} ${this.operator} ${this.num2} = ${this.evaluate()}`
        } catch (e) {
            return e.message
        }
    }

}

class Addition extends Expresison {
    constructor(num1, num2) {
        super(num1, num2, '+')
    }
}

class Subtraction extends Expresison {
    constructor(num1, num2) {
        super(num1, num2, '-')
    }
}

class Division extends Expresison {
    constructor(num1, num2) {
        super(num1, num2, '/')
    }
}

class Multiplication extends Expresison {
    constructor(num1, num2) {
        super(num1, num2, '*')
    }
}

class Power extends Expresison {
    constructor(num1, num2) {
        super(num1, num2, '**')
    }
}


addition = new Addition(2, 2)
console.log(addition.toString())
subtract = new Subtraction(10, -10)
console.log(subtract.toString())
division = new Division(51, 17)
console.log(division.toString())
multiply = new Multiplication(100, new Division(1, 3).evaluate())
console.log(multiply.toString())
power = new Power(2, 10)
console.log(power.toString())
expr = new Expresison(1, 0, '/')
console.log(expr.toString())