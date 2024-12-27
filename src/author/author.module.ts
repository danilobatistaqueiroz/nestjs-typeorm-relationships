import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { AuthorEntity } from './author.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from 'src/photo/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity,PhotoEntity])],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
