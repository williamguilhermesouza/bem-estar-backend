import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientsModel } from './patients.model';

@Injectable()
export class PatientsService {
  constructor(private readonly patientsModel: PatientsModel) {}

  create(createPatientDto: CreatePatientDto) {
    return this.patientsModel.save(createPatientDto);
  }

  findAll() {
    return this.patientsModel.find();
  }

  findOne(id: number) {
    return this.patientsModel.findOne(id);
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return this.patientsModel.update(id, updatePatientDto);
  }

  remove(id: number) {
    return this.patientsModel.delete(id);
  }
}
