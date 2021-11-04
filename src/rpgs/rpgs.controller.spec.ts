import { Test, TestingModule } from '@nestjs/testing';
import { RpgsController } from './rpgs.controller';
import { RpgsService } from './rpgs.service';

describe('RpgsController', () => {
  let controller: RpgsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RpgsController],
      providers: [RpgsService],
    }).compile();

    controller = module.get<RpgsController>(RpgsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
