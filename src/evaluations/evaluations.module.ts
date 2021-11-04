import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import { EvaluationsModel } from './evaluations.model';
import { Evaluation } from './entities/evaluation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluation])],
  controllers: [EvaluationsController],
  providers: [EvaluationsService, EvaluationsModel],
})
export class EvaluationsModule {}
