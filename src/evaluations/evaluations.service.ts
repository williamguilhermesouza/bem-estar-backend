import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { EvaluationsModel } from './evaluations.model';

@Injectable()
export class EvaluationsService {
  constructor(private readonly evaluationsModel: EvaluationsModel) {}

  create(createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationsModel.save(createEvaluationDto);
  }

  findAll() {
    return this.evaluationsModel.find();
  }

  findOne(id: number) {
    return this.evaluationsModel.findOne(id);
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationsModel.update(id, updateEvaluationDto);
  }

  remove(id: number) {
    return this.evaluationsModel.delete(id);
  }

  findByPatientId(patientId: number) {
    return this.evaluationsModel.findByPatientId(patientId);
  }
}
