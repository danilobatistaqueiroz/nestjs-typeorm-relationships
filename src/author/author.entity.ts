import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { PhotoEntity } from '../photo/photo.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PhotoEntity, (photo) => photo.author, {eager: true, cascade: true}) // note: we will create author property in the Photo class below
  photos: PhotoEntity[];
}