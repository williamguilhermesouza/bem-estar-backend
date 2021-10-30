import { Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { AgendaModel } from './agenda.model';

@Injectable()
export class AgendaService {
  constructor(private readonly agendaModel: AgendaModel) {}

  create(createAgendaDto: CreateAgendaDto) {
    return this.agendaModel.save(createAgendaDto);
  }

  findAll() {
    return this.agendaModel.find();
  }

  findOne(id: number) {
    return this.agendaModel.findOne(id);
  }

  update(id: number, updateAgendaDto: UpdateAgendaDto) {
    return this.agendaModel.update(id, updateAgendaDto);
  }

  remove(id: number) {
    return this.agendaModel.delete(id);
  }
}
