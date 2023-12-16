import {Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateCommentDto} from "./dto/create-comment.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Comments} from "./comments.model";
import {Post} from "../posts/posts.model";
import {ToggleLikeCommentDto, UpdateCommentDto} from "./dto/update-comment.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comments) private commentsRepository: typeof Comments,
        @InjectModel(Post) private postRepository: typeof Post
    ) {
    }

    async createComment(dto: CreateCommentDto, userId: number){
        const comment = await this.commentsRepository.create({...dto, postId: dto.postId, userId: userId})
        return await this.commentsRepository.findOne({where: {id: comment.id},  include: {all: true}})
    }

    async deleteComment(id: number, userId: number){
        const comment = await this.commentsRepository.findOne({where: {id: id}})
        const post = await this.postRepository.findOne({where: {id: comment.postId}})
        if(userId === post.userId || comment.userId === userId){
            await this.commentsRepository.destroy({where: { id: id }})
        } else {
            throw new UnauthorizedException({ message: "Нет доступа удалять комментарий" });
        }
    }

    async getAllCommentsInPost(id: number){
        return await this.commentsRepository.findAll({where: {postId: id}, include: {all: true}, order: [['createdAt', 'DESC']]})
    }

    async toggleLikeComment(dto: ToggleLikeCommentDto, userId: number){
        const savedComment = await this.commentsRepository.findOne({where: { id: dto.commentId }})
        let isLike = false;

        if(!savedComment.likesList.includes(userId)){
            await savedComment.update({likesList: [...savedComment.likesList, userId], countLikes: savedComment.countLikes + 1})
            isLike = true
        } else {
            const newLikeList = savedComment.likesList.filter(likeUserId => likeUserId !== userId)
            await savedComment.update({likesList: [...newLikeList], countLikes: savedComment.countLikes - 1})
        }

        return {
            commentId: savedComment.id,
            isLike: isLike
        }
    }

    async updateComment(dto: UpdateCommentDto, userId: number){
        const findComment = await this.commentsRepository.findOne({where: {id: dto.commentId}})
        if(userId === findComment.userId){
            return await findComment.update({content: dto.content})
        }
        throw new UnauthorizedException({ message: "Нет доступа редактировать комментарий" });
    }
}
