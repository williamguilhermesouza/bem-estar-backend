import { Test, TestingModule } from '@nestjs/testing';
import { MovimentsController } from './moviments.controller';
import { MovimentsService } from './moviments.service';

describe('MovimentsController', () => {
  let controller: MovimentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentsController],
      providers: [MovimentsService],
    }).compile();

    controller = module.get<MovimentsController>(MovimentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
