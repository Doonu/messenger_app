import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Post} from "../posts/posts.model";
import {User} from "../users/users.model";

interface CommentsCreate{
    content: string
    postId: number
    userId: number
}

@Table({tableName: 'comments'})
export class Comments extends Model<Comments, CommentsCreate>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.TEXT, allowNull: false })
    content: string

    @Column({type: DataType.ARRAY(DataType.INTEGER), defaultValue: []})
    likesList: number[];

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    countLikes: number;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER})
    postId: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}