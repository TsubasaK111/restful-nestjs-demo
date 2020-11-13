import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Human } from './humans.interface';
import { HumansService } from './humans.service';

@Controller('humans')
export class HumansController {
    constructor(private readonly humanService: HumansService) { }

    @Get(':id')
    getHuman(@Param('id') id: number): Human {
        return this.humanService.getHuman(id)
    }
    
    @Get()
    getHumans(): Human[] {
        return this.humanService.getHumans()
    }

    @Post()
    create(@Query('name')name): Human {
      return this.humanService.makeHuman(name)
    }
}
