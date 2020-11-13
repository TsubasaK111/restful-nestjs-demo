import { Module } from '@nestjs/common';
import { CheeseModule } from './cheese/cheese.module';
import { HumansController } from './humans.controller';
import { HumansService } from './humans.service';

@Module({
  imports: [CheeseModule],
  controllers: [HumansController],
  providers: [HumansService]
})
export class HumansModule {}
