import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorEntity } from './author.entity';
import { CreateAuthorForm } from './form/create.author';
import { CreatePhotoForm } from 'src/photo/form/create.photo';
import { PhotoEntity } from 'src/photo/photo.entity';

@Controller('author')
export class AuthorController {

  constructor(private authorService: AuthorService) {}

  @Get()
  async listAll() {
    const authors = await this.authorService.listAll();
    return authors;
  }

  @Get('/:id/photos')
  async getPhotos(@Param('id') id: number) {
    const photos = await this.authorService.getPhotos(id);
    return photos;
  }

  @Post()
  async signUp(@Body() author: CreateAuthorForm) {
    const authorEntity = new AuthorEntity();
    authorEntity.name = author.name;
    return await this.authorService.create(authorEntity);
  }

  @Post('/:idAuthor/photo')
  async addPhoto(@Param('idAuthor') idAuthor:number, @Body() photo: CreatePhotoForm){
    const authorExists = await this.authorService.exists(idAuthor);
    if(!authorExists) {
      throw new HttpException({ reason: `Author with id ${idAuthor} does not exist.` }, HttpStatus.BAD_REQUEST);
    }
    await this.authorService.addPhoto(idAuthor, photo.title, photo.description, photo.filename);
  }
  
}
