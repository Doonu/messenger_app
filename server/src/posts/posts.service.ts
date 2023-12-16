import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {Post} from "./posts.model";
import {InjectModel} from "@nestjs/sequelize";
import {FilesService} from "../files/files.service";

@Injectable()

export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post, private fileService: FilesService) {
    }

    async create(dto: CreatePostDto, photos: Array<Express.Multer.File>) {
        const fileNames: string[] = await this.fileService.createFiles(photos)
        const createdPost = await this.postRepository.create({...dto, files: fileNames})
        return await this.postRepository.findOne({where: { id: createdPost.id }, include: { all: true } })
    }
    //TODO: Получение постов только друзей
    //TODO: Не отправлять пароль
    async getAll(){
        return await this.postRepository.findAll({include: {all: true}});
    }
}
