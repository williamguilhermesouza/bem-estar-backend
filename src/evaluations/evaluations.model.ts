import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';

@Injectable()
export class EvaluationsModel {
  //using constructor to inject patient entity into the service
  constructor(
    @InjectRepository(Evaluation)
    private readonly evaluationRepository: Repository<Evaluation>,
  ) {}

  async save(evaluation: Evaluation): Promise<Evaluation> {
    return await this.evaluationRepository.save(evaluation);
  }

  async update(id: number, evaluation: UpdateEvaluationDto): Promise<unknown> {
    await this.evaluationRepository.update(id, evaluation);
    return { msg: `Successfully updated evaluation with id ${id}` };
  }

  async find(): Promise<Evaluation[]> {
    return await this.evaluationRepository.find();
  }

  async findOne(id: number): Promise<Evaluation> {
    return await this.evaluationRepository.findOne(id);
  }

  async delete(id: number): Promise<Evaluation> {
    const user = await this.evaluationRepository.findOne(id);
    await this.evaluationRepository.delete(id);
    return user;
  }
}
