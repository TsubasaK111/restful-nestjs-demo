import { Injectable } from '@nestjs/common';
import HumanData from 'src/_data/HumanData';
import { Human } from './humans.interface';

@Injectable()
export class HumansService {
    getHumans(): Human[] {
        return HumanData
    }

    getHuman(id: number): Human {
        return HumanData[id]
    }

    makeHuman(name: string): Human {
        const newHuman = new Human(name)
        HumanData.push(newHuman)
        return newHuman
    }

    killHuman(id: number): void {
        if(HumanData[id]){
            HumanData.splice(id,1)
        }
    }
}
