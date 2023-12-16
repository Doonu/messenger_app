import {Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {AnyFilesInterceptor, FilesInterceptor} from "@nestjs/platform-express";
import {ApiResponse} from "@nestjs/swagger";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    @Post('/create')
    @UseInterceptors(AnyFilesInterceptor())
    createPost(@Body() dto: CreatePostDto, @UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files, dto)
        return this.postService.create(dto, files)
    }

    @Get('')
    getAllPosts(){
        return this.postService.getAll()
    }
}
