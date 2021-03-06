import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersModel {
  //using constructor to inject users entity into the service
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(id: number, user: UpdateUserDto): Promise<unknown> {
    await this.userRepository.update(id, user);
    return { msg: `Successfully updated user with id ${id}` };
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({email: email});
  }

  async delete(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    await this.userRepository.delete(id);
    return user;
  }
}
