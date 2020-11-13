import { Injectable, Logger } from '@nestjs/common';
import HumanData from 'src/_data/HumanData';
import { Cheese } from './cheese.interface';

@Injectable()
export class CheeseService {
    private readonly logger = new Logger(CheeseService.name);

    getCheeses(humanId: number): Cheese[] {
        return HumanData[humanId].basket
    }

    addCheese(humanId: number, cheeseName: string): Cheese[] {
        const newCheese = new Cheese(cheeseName)
        HumanData[humanId].basket.push(newCheese)
        return HumanData[humanId].basket
    }

    eatCheese(humanId: number, cheeseId: number): Error | Cheese[] {
        if(HumanData[humanId].basket.length < 1){
            this.logger.log("いやちょっと待てよ")
            // TODO: send 406
            return new Error("いやちょっと待てよ")
        }
        HumanData[humanId].basket.splice(cheeseId, 1)
        return HumanData[humanId].basket
    }
}
