import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateRpgDto } from './dto/update-rpg.dto';
import { Rpg } from './entities/rpg.entity';

@Injectable()
export class RpgsModel {
  //using constructor to inject patient entity into the service
  constructor(
    @InjectRepository(Rpg)
    private readonly rpgRepository: Repository<Rpg>,
  ) {}

  async save(rpg: Rpg): Promise<Rpg> {
    return await this.rpgRepository.save(rpg);
  }

  async update(id: number, rpg: UpdateRpgDto): Promise<unknown> {
    await this.rpgRepository.update(id, rpg);
    return { msg: `Successfully updated rpg with id ${id}` };
  }

  async find(): Promise<Rpg[]> {
    return await this.rpgRepository.find();
  }

  async findOne(id: number): Promise<Rpg> {
    return await this.rpgRepository.findOne(id);
  }

  async delete(id: number): Promise<Rpg> {
    const rpg = await this.rpgRepository.findOne(id);
    await this.rpgRepository.delete(id);
    return rpg;
  }
}
