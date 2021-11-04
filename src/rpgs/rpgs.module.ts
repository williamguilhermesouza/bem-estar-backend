import { Module } from '@nestjs/common';
import { RpgsService } from './rpgs.service';
import { RpgsController } from './rpgs.controller';
import { RpgsModel } from './rpgs.model';
import { Rpg } from './entities/rpg.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Rpg])],
  controllers: [RpgsController],
  providers: [RpgsService, RpgsModel],
})
export class RpgsModule {}
