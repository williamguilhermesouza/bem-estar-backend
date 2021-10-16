import { Injectable } from '@nestjs/common';
import { CreateMovimentDto } from './dto/create-moviment.dto';
import { UpdateMovimentDto } from './dto/update-moviment.dto';

@Injectable()
export class MovimentsService {
  create(createMovimentDto: CreateMovimentDto) {
    return 'This action adds a new moviment';
  }

  findAll() {
    return `This action returns all moviments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviment`;
  }

  update(id: number, updateMovimentDto: UpdateMovimentDto) {
    return `This action updates a #${id} moviment`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviment`;
  }
}
