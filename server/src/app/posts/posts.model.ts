import {Model, Table, Column, DataType, BelongsTo, ForeignKey, DeletedAt, HasMany} from "sequelize-typescript";
import { User } from "../users/users.model";
import {Comments} from "../comments/comments.model";

interface PostCreationAttrs {
  userId: number;
  content: string[];
  files: string[];
}

//TODO: Изменить массив комментариев, добавить (id отправителя, body, id, likes [])

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
  @DeletedAt
  deletedAt: number;

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.ARRAY(DataType.TEXT), allowNull: false })
  content: string[];

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isDisabledComments: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  countLikes: number;

  //Айди пользователей
  @Column({type: DataType.ARRAY(DataType.INTEGER), defaultValue: []})
  likesList: number[];

  @Column({type: DataType.ARRAY(DataType.STRING)})
  files: string[];

  @Column({type: DataType.STRING})
  view: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;

  @HasMany(() => Comments)
  comments: Comments[];
}
