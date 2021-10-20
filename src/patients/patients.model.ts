import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsModel {
  //using constructor to inject patient entity into the service
  constructor(
@InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async save(patient: Patient): Promise<Patient> {
    return await this.patientRepository.save(patient);
  }

  async update(id: number, patient: UpdatePatientDto): Promise<unknown> {
    await this.patientRepository.update(id, patient);
    return { msg: `Successfully updated user with id ${id}` };
  }

  async find(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    return await this.patientRepository.findOne(id);
  }

  async delete(id: number): Promise<Patient> {
    const user = await this.patientRepository.findOne(id);
    await this.patientRepository.delete(id);
    return user;
  }
}
