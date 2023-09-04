// Core
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Other
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findUserByEmail(email: string) {
    return this.repository.findOneBy({
      email,
    });
  }

  async findUserById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }
}
