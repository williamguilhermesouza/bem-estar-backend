export class CreateMovementDto {
  id?: number;

  patientId: number;

  description: string;

  value: number;

  createdAt?: string;

  updatedAt?: string;
}
