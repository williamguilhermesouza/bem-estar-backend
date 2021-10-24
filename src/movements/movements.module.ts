import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { MovementsController } from './movements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementsModel } from './movements.model';
import { Movement } from './entities/movement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movement])],
  controllers: [MovementsController],
  providers: [MovementsService, MovementsModel],
})
export class MovementsModule {}
