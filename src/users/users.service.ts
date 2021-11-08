import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModel } from './users.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersModel: UsersModel) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = await this.usersModel.save(createUserDto);
    return rest;
  }

  async findAll() {
    let users = await this.usersModel.find();
    users = users.map((user) => {
      const { password, ...rest } = user;
      return rest;
    });
    return users;
  }

  async findOne(id: number) {
    const { password, ...rest } = await this.usersModel.findOne(id);
    return rest;
  }

  async findByEmail(email: string) {
    return this.usersModel.findByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersModel.delete(id);
  }
}
