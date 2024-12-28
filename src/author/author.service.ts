import { Injectable } from '@nestjs/common';
import { AuthorEntity } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListAuthorsDTO } from './dto/list.authors';
import { PhotoEntity } from 'src/photo/photo.entity';
import { ListPhotosDTO } from 'src/photo/dto/list.photos';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>
  ) {}

  async getPhotos(id:number):Promise<ListPhotosDTO[]> {
    const author = await this.authorRepository.findOneBy({ id: id});
    console.log(author);
    const photosDTO = author.photos?.map(
      (photo) => new ListPhotosDTO(photo.id, photo.title, photo.description, photo.filename, author.name),
    );
    return photosDTO;
  }

  async addPhoto(authorId:number, title:string, description:string, filename:string) {
    const photo = new PhotoEntity();
    photo.title = title;
    photo.description = description;
    photo.filename = filename;

    //Salvar photos usando o author é necessário o relacionamento ter a opção de cascade:true
    //Para o repositório author carregar as photos é necessário a opção eager:true
    const author = await this.authorRepository.findOneBy({ id: authorId });
    author.photos.push(photo);
    await this.authorRepository.save(author);

    //É possivel salvar a coleção usando o repositório author mas também é possível usando o repositório photo
    //photo.author = author;
    //await this.photoRepository.save(photo);
    return photo;
  }

  async exists(id:number){
    return await this.authorRepository.existsBy({id});
  }

  async get(id:number){
    return await this.authorRepository.findOneBy({id});
  }

  async update(id: number, authorEntity: AuthorEntity) {
    await this.authorRepository.update(id, authorEntity);
  }

  async listAll() {
    const authors = await this.authorRepository.find();
    const authorsDTO = authors.map(
      (author) => new ListAuthorsDTO(author.id, author.name),
    );
    return authorsDTO;
  }

  async create(authorEntity: AuthorEntity) {
    await this.authorRepository.save(authorEntity);
  }

}