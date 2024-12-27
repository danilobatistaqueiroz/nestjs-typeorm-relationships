import { IsNotEmpty } from 'class-validator';

export class CreatePhotoForm {
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  title: string;
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;
  @IsNotEmpty({ message: 'O nome do arquivo não pode ser vazio' })
  filename: string;
}