import { Test, TestingModule } from '@nestjs/testing';
import { RpgsService } from './rpgs.service';

describe('RpgsService', () => {
  let service: RpgsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RpgsService],
    }).compile();

    service = module.get<RpgsService>(RpgsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
