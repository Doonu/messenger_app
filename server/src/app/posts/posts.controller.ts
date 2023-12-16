import {
    Body,
    Controller,
    Delete,
    Get, Param, Patch,
    Post, Req,
    UploadedFiles,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {AnyFilesInterceptor} from "@nestjs/platform-express";
import {ApiResponse} from "@nestjs/swagger";
import {RolesGuard} from "../auth/roles.guard";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdatePostCommentsDto, UpdatePostLikeDto} from "./dto/update-post.dto";
import {CreateCommentDto} from "../comments/dto/create-comment.dto";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {
    }

    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Get('')
    getAllPosts(){
        return this.postService.getAll()
    }

    @UseGuards(JwtAuthGuard)
    @Post('')
    @UseInterceptors(AnyFilesInterceptor())
    createPost(
        @Body() dto: CreatePostDto,
        @UploadedFiles() files: Array<Express.Multer.File>,
        @Req() {userId}: any
    ){
        return this.postService.create(dto, userId, files)
    }

    @Post('/restore/:id')
    @ApiResponse({ status: 200, type: Post })
    restorePostById(@Param("id") id: number){
        return this.postService.restoreById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/toggle-comments')
    toggleComments(@Body() dto: UpdatePostCommentsDto, @Req() {userId}: any){
        return this.postService.toggleComments(dto, userId)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/like')
    toggleLike(@Body() dto: UpdatePostLikeDto, @Req() {userId}: any){
        return this.postService.toggleLike(dto, userId)
    }

    // @UseGuards(RolesGuard)
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiResponse({ status: 200, type: Post })
    deletePostById(@Param("id") id: number, @Req() {userId}: any){
        return this.postService.deleteById(id, userId)
    }

}
