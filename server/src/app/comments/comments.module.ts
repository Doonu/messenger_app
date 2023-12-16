import {forwardRef, Module} from '@nestjs/common';
import { CommentsController } from './comments.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "../posts/posts.model";
import {Comments} from "./comments.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {PostsService} from "../posts/posts.service";
import {CommentsService} from "./comments.service";

@Module({
    providers: [CommentsService],
    controllers: [CommentsController],
    imports: [
        SequelizeModule.forFeature([Post, Comments, User]),
        RolesModule,
        forwardRef(() => AuthModule)
    ]
})
export class CommentsModule {}
