import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AuthorEntity } from '../author/author.entity';

@Entity('photo')
export class PhotoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @ManyToOne(() => AuthorEntity, (author) => author.photos)
  author: AuthorEntity;
  
}