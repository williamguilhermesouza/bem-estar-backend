import { Injectable } from '@nestjs/common';
import { CreateRpgDto } from './dto/create-rpg.dto';
import { UpdateRpgDto } from './dto/update-rpg.dto';
import { RpgsModel } from './rpgs.model';

@Injectable()
export class RpgsService {
  constructor(private rpgModel: RpgsModel) {}

  create(createRpgDto: CreateRpgDto) {
    return this.rpgModel.save(createRpgDto);
  }

  findAll() {
    return this.rpgModel.find();
  }

  findOne(id: number) {
    return this.rpgModel.findOne(id);
  }

  update(id: number, updateRpgDto: UpdateRpgDto) {
    return this.rpgModel.update(id, updateRpgDto);
  }

  remove(id: number) {
    return this.rpgModel.delete(id);
  }
}
