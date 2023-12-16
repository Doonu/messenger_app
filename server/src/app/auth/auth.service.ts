import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "../users/dto/login-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../users/users.model";
import {RegisterUserDto} from "../users/dto/register-user.dto";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService,
              private jwtService: JwtService) {
  }

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    const token = await this.generateToken(user);
    return {
      token: token.token,
    }
  }

  async registration(userDto: RegisterUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException("Пользователь с таким email существует", HttpStatus.BAD_REQUEST);
    }
    const generateName = `${userDto.name}#${Math.floor(Math.random() * 10000)}`
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const color = await this.getRandomColor();

    const user = await this.userService.postCreateUser({
      ...userDto,
      password: hashPassword,
      name: generateName,
      imgSubstitute: color
    });

    const token = await this.generateToken(user);
    return {
      token: token.token,
    }
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload)
    };
  }

  private async validateUser(userDto: LoginUserDto) {
      const user = await this.userService.getUserByEmail(userDto.email) ;
      const passwordEquals = user && await bcrypt.compare(userDto.password, user.password);
      if (user && passwordEquals) {
        return user;
      }

      throw new UnauthorizedException({ message: "Неверный емайл или пароль" });
  }

  private async getRandomColor() {
    const colors = ['#ff0017', '#ff009d', '#aa00ff', '#5900ff', '#0d00ff', '#00a7ff', '#00ff25', '#ffb400'];
    return colors[Math.floor(Math.random() * colors.length)]
  }

}
