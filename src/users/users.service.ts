import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersModel } from './users.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersModel: UsersModel) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.save(createUserDto);
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: number) {
    return this.usersModel.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.usersModel.delete(id);
  }
}
