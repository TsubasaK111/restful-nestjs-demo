import { Controller, Delete, Get, Logger, Param, Post, Query } from '@nestjs/common';
import { Cheese } from './cheese.interface';
import { CheeseService } from './cheese.service';

@Controller('humans/:humanId/basket')
export class CheeseController {
    private readonly logger = new Logger(CheeseController.name);
  
    constructor(private readonly cheeseService: CheeseService) { }

    @Get()
    getCheeses(@Param('humanId') humanId): Cheese[] {
        this.logger.log("cheese")
        return this.cheeseService.getCheeses(humanId)
    }

    @Post()
    addCheese(@Param('humanId') humanId, @Query('cheeseName')cheeseName): Cheese[] {
        return this.cheeseService.addCheese(humanId, cheeseName)
    }

    @Delete(':cheeseId')
    eatCheese(@Param('humanId') humanId, @Param('cheeseId') cheeseId): Error | Cheese[] {
        // TODO: return 4xx?
        return this.cheeseService.eatCheese(humanId, cheeseId)
    }
    
}
