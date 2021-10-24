import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Movement } from './entities/movement.entity';

@Injectable()
export class MovementsModel {
  //using constructor to inject patient entity into the service
  constructor(
    @InjectRepository(Movement)
    private readonly movementRepository: Repository<Movement>,
  ) {}

  async save(movement: Movement): Promise<Movement> {
    return await this.movementRepository.save(movement);
  }

  async update(id: number, movement: UpdateMovementDto): Promise<unknown> {
    await this.movementRepository.update(id, movement);
    return { msg: `Successfully updated user with id ${id}` };
  }

  async find(): Promise<Movement[]> {
    return await this.movementRepository.find();
  }

  async findOne(id: number): Promise<Movement> {
    return await this.movementRepository.findOne(id);
  }

  async delete(id: number): Promise<Movement> {
    const user = await this.movementRepository.findOne(id);
    await this.movementRepository.delete(id);
    return user;
  }
}
