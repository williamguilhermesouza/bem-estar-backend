export class CreateAgendaDto {
  id?: number;

  name: string;

  startDateTime: Date;

  endDateTime: Date;

  classes: string;

  createdAt?: string;
  
  updatedAt?: string;
}
