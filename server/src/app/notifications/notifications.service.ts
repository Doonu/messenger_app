import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Notifications} from "./notifications.model";
import {CreateNotificationsDto} from "./dto/create-notifications.dto";
import {DeleteNotificationDto} from "./dto/delete-notification.dto";

@Injectable()
export class NotificationsService {
    constructor(
        @InjectModel(Notifications) private notificationsRepository: typeof Notifications
    ) {
    }

    async createNotifications(dto: CreateNotificationsDto){
        const searchedNotify = await this.notificationsRepository.findOne({where: {senderId: dto.senderId, userId: dto.userId}, include: {all: true}})

        if(!searchedNotify?.id) {
            const notification = await this.notificationsRepository.create({...dto})
            return await this.notificationsRepository.findOne({where: {id: notification.id}, include: {all: true}})
        }
    }

    async deleteNotification(dto: DeleteNotificationDto){
        await this.notificationsRepository.destroy({where: {userId: dto.userId, senderId: dto.senderId}})
    }

    async getAllNotifications(userId: number){
        return await this.notificationsRepository.findAll({where: {userId: userId}, include: {all: true}})
    }
}
