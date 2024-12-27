import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListUsersDTO } from './dto/list.users';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listAll() {
    const users = await this.userRepository.find();
    const usersDTO = users.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );
    return usersDTO;
  }

  async create(userEntity: UserEntity) {
    await this.userRepository.save(userEntity);
  }

}
