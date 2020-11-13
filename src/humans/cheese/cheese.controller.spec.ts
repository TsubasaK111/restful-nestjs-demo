import { Test, TestingModule } from '@nestjs/testing';
import { CheeseController } from './cheese.controller';

describe('CheeseController', () => {
  let controller: CheeseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheeseController],
    }).compile();

    controller = module.get<CheeseController>(CheeseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
