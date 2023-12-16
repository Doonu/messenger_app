 import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import {RegisterUserDto} from "./dto/register-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
              private roleService: RolesService) {
  }

  // Создание пользователей
  async postCreateUser(dto: RegisterUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  // Получение всех пользователей
  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true }});
  }

  // Получение пользователя по id
  async getUser(id: number) {
    return await this.userRepository.findOne({ attributes: [ 'name', 'email', 'banned', 'banReason', 'id', 'imgSubstitute'], where: { id: id }, include: { all: true } });
  }

  async getProfile(userId: any){
    return await this.userRepository.findOne({ attributes: [ 'name', 'email', 'banned', 'banReason', 'id', 'imgSubstitute'], where: { id: userId }, include: { all: true } });
  }

  // Удаление пользователя по id
  async deleteUser(dto: DeleteUserDto) {
    return await this.userRepository.destroy({
      where: {
        id: dto.id
      }
    });
  }

  // Получение пользователя по email
  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email }, include: { all: true } });
  }

  // Добавление роли
  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (user && role) {
      await user.$add("role", role.id);
      return dto;
    }
    throw new HttpException("Пользователь или роль не найдены", HttpStatus.NOT_FOUND);
  }

  // Бан пользователя
  async banUser(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }

  async putUpdateUser() {
    //TODO: сделать update полей пользователя
  }
}
