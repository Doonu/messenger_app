import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from "./auth/auth.module";
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {PostsModule} from "./posts/posts.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
  controllers: [],
  providers: [], // Любой переиспользованный компонент
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Post],
      autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    FilesModule,
    PostsModule
  ]
})
export class AppModule {
}
