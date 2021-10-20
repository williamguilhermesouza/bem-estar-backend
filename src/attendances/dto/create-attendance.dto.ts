export class CreateAttendanceDto {
  id?: number;

  patientId: number;

  attendanceDate: Date;

  doneProcedures: string;

  createdAt?: string;
  
  updatedAt?: string;
}
