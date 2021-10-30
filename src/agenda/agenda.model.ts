import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { Agenda } from './entities/agenda.entity';

@Injectable()
export class AgendaModel {
  //using constructor to inject users entity into the service
  constructor(
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,
  ) {}

  async save(user: Agenda): Promise<Agenda> {
    return await this.agendaRepository.save(user);
  }

  async update(id: number, agenda: UpdateAgendaDto): Promise<unknown> {
    await this.agendaRepository.update(id, agenda);
    return { msg: `Successfully updated user with id ${id}` };
  }

  async find(): Promise<Agenda[]> {
    return await this.agendaRepository.find();
  }

  async findOne(id: number): Promise<Agenda> {
    return await this.agendaRepository.findOne(id);
  }

  async delete(id: number): Promise<Agenda> {
    const user = await this.agendaRepository.findOne(id);
    await this.agendaRepository.delete(id);
    return user;
  }
}
