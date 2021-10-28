import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendancesModel {
  //using constructor to inject patient entity into the service
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
  ) {}

  async save(attendance: Attendance): Promise<Attendance> {
    return await this.attendanceRepository.save(attendance);
  }

  async update(id: number, attendance: UpdateAttendanceDto): Promise<unknown> {
    await this.attendanceRepository.update(id, attendance);
    return { msg: `Successfully updated user with id ${id}` };
  }

  async find(): Promise<Attendance[]> {
    return await this.attendanceRepository.find();
  }

  async findOne(id: number): Promise<Attendance> {
    return await this.attendanceRepository.findOne(id);
  }

  async delete(id: number): Promise<Attendance> {
    const user = await this.attendanceRepository.findOne(id);
    await this.attendanceRepository.delete(id);
    return user;
  }

  async findByPatientId(patientId: number): Promise<Attendance[]> {
    return await this.attendanceRepository.find({ patientId });
  }
}
