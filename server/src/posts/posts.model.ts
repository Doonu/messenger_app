import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "../users/users.model";

interface PostCreationAttrs {
  userId: number;
  content: string[];
  files: string[];
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.ARRAY(DataType.TEXT), allowNull: false })
  content: string[];

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  countLikes: number;

  @Column({type: DataType.BOOLEAN, defaultValue: false})
  isDisabledComments: boolean;

  //Айди пользователей
  @Column({type: DataType.ARRAY(DataType.INTEGER), defaultValue: []})
  likesList: number[];

  @Column({type: DataType.ARRAY(DataType.STRING), defaultValue: []})
  comments: string[]

  @Column({type: DataType.ARRAY(DataType.STRING)})
  files: string[];

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
