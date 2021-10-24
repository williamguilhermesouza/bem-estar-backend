import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MovementsModel } from './movements.model';

@Injectable()
export class MovementsService {
  constructor(private readonly movementsModel: MovementsModel) {}

  create(createMovementDto: CreateMovementDto) {
    return this.movementsModel.save(createMovementDto);
  }

  findAll() {
    return this.movementsModel.find();
  }

  findOne(id: number) {
    return this.movementsModel.findOne(id);
  }

  update(id: number, updateMovementDto: UpdateMovementDto) {
    return this.movementsModel.update(id, updateMovementDto);
  }

  remove(id: number) {
    return this.movementsModel.delete(id);
  }
}
