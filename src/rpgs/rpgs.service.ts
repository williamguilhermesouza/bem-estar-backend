import { Injectable } from '@nestjs/common';
import { CreateRpgDto } from './dto/create-rpg.dto';
import { UpdateRpgDto } from './dto/update-rpg.dto';

@Injectable()
export class RpgsService {
  create(createRpgDto: CreateRpgDto) {
    return 'This action adds a new rpg';
  }

  findAll() {
    return `This action returns all rpgs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rpg`;
  }

  update(id: number, updateRpgDto: UpdateRpgDto) {
    return `This action updates a #${id} rpg`;
  }

  remove(id: number) {
    return `This action removes a #${id} rpg`;
  }
}
