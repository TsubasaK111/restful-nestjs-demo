import { Cheese } from "./cheese/cheese.interface"

export class Human {
    name: string
    hunger: number
    stomach: string[] = []
    basket: Cheese[] = []
    constructor(name: string) {
        this.name = name
    }

    eat(food: string) {
        this.stomach.push(food)
    }
}

export class Tsubasa extends Human {
    constructor() {
        super("Tsubasa");
    }

    bark() {
        console.log("Woof! Woof!");
    }
}
