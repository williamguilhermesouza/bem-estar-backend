import { Test, TestingModule } from '@nestjs/testing';
import { MovimentsService } from './moviments.service';

describe('MovimentsService', () => {
  let service: MovimentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimentsService],
    }).compile();

    service = module.get<MovimentsService>(MovimentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
