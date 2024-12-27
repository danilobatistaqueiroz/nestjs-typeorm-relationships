import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './form/create.user';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async listAll() {
    const usuariosSalvos = await this.userService.listAll();
    return usuariosSalvos;
  }

  @Post()
  async signUp(@Body() user: CreateUser) {
    const userEntity = new UserEntity();
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.name = user.name;
    return await this.userService.create(userEntity);
  }

  

}
