import { Injectable } from '@nestjs/common';
import { AttendancesModel } from './attendances.model';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendancesService {
  constructor(private readonly attendancesModel: AttendancesModel) {}
  create(createAttendanceDto: CreateAttendanceDto) {
    return this.attendancesModel.save(createAttendanceDto);
  }

  findAll() {
    return this.attendancesModel.find();
  }

  findOne(id: number) {
    return this.attendancesModel.findOne(id);
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendancesModel.update(id, updateAttendanceDto);
  }

  remove(id: number) {
    return this.attendancesModel.delete(id);
  }
}
