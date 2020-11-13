import { Module } from '@nestjs/common';
import { CheeseController } from './cheese.controller';
import { CheeseService } from './cheese.service';

@Module({
  controllers: [CheeseController],
  providers: [CheeseService]
})
export class CheeseModule {}
