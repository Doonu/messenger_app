import { Injectable } from '@nestjs/common';
import {Dialog} from "./dialogs.model";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "../users/models/users.model";
import {Op} from "sequelize";
import {UserDialog} from "./user-dialogs.model";
import {Message} from "../messages/models/messages.model";
import {Role} from "../roles/roles.model";
import {MessageReadStatus} from "../messages/models/messagesReadStatus.model";

@Injectable()
export class DialogsService {
    constructor(
        @InjectModel(Dialog) private dialogRepository: typeof Dialog,
        @InjectModel(User) private userRepository: typeof User,
        @InjectModel(UserDialog) private userDialogRepository: typeof UserDialog,
        @InjectModel(Message) private messageRepository: typeof Message,
        @InjectModel(MessageReadStatus) private messageReadStatus: typeof MessageReadStatus
    ){
    }

    async getAll(userId: number, page: number){
        let currentPage = page - 1;
        const limit = 10;

        const dialogs = await this.userDialogRepository.findAll({
            where: { userId },
            include: {all: true},
            limit: limit,
            offset: currentPage * limit
        })

        const dialogsId = dialogs.map(dialog => dialog.dialogId)

        return await this.dialogRepository.findAll({
            where: {
                id: {
                    [Op.in]: dialogsId
                }
            },
            include: { all: true },
            order: [['updatedAt', "DESC"]]
        })
    }

    async getById(id: number, userId: number){
        const count = await this.messageReadStatus.findAll({where: {userId: userId, readStatus: false}})

        const findDialog = await this.dialogRepository.findOne(
            {
                where: { id: id },
                include: [
                    {
                        model: User,
                        include: [{
                            model: Role
                        }]
                    },
                    {
                        association: 'fixedMessage',
                        include: ['author']
                    }
                ]
            }
        )

        return {
            ...JSON.parse(JSON.stringify(findDialog)),
            countNotReadMessages: count.length
        }
    }

    async create(userId: number, participantIds: number[]){
        const profile = await this.userRepository.findByPk(userId)
        const users = await this.userRepository.findAll({
            where: {
                id: {
                    [Op.in]: participantIds
                }
            },
        });

        let isGroup = false;
        let nameDialog = null;
        const arrayPlayers = [profile, ...users];

        if (arrayPlayers.length  > 2) {
            isGroup = true
            nameDialog = "Название чата"
        }


        const createdDialog = await this.dialogRepository.create({dialogName: nameDialog, isGroup: isGroup});
        await createdDialog.$set("participants", arrayPlayers)
        createdDialog.participants = arrayPlayers

        return await this.dialogRepository.findOne({where: {id: createdDialog.id}, include: {all: true}})
    }

    async createFixed(dialogId: number, messageId: number){
        const dialog = await this.dialogRepository.findOne({where: {id: dialogId}});
        const findMessage = await this.messageRepository.findOne({where: {id: messageId}, include: {all: true}})
        await dialog.update({ fixedMessageId: findMessage.id })
        return findMessage;
    }

    async deleteFixed(dialogId: number){
        const dialog = await this.dialogRepository.findOne({where: {id: dialogId}});
        await dialog.update({fixedMessageId: null})
    }
}
