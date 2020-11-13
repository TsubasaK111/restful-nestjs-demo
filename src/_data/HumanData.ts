import { CheeseController } from "src/humans/cheese/cheese.controller";
import { Cheese } from "src/humans/cheese/cheese.interface";
import { Human, Tsubasa } from "src/humans/humans.interface";


const humans = [
    new Human("John"),
    new Tsubasa()
]

humans[1].basket.push(new Cheese("camembert"));

export default humans