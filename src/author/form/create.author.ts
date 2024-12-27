import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { PhotoEntity } from 'src/photo/photo.entity';

export class CreateAuthorForm {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;
}