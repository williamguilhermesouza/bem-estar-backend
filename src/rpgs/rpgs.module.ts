import { Module } from '@nestjs/common';
import { RpgsService } from './rpgs.service';
import { RpgsController } from './rpgs.controller';

@Module({
  controllers: [RpgsController],
  providers: [RpgsService]
})
export class RpgsModule {}
