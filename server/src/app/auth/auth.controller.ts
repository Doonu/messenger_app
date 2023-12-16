import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LoginUserDto } from "../users/dto/login-user.dto";
import { AuthService } from "./auth.service";
import { ValidationPipe } from "../../pipes/validation.pipe";
import {RegisterUserDto} from "../users/dto/register-user.dto";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary: "Авторизация пользователя" })
  @ApiResponse({ status: 200 })
  @Post("/login")
  login(@Body() userDto: LoginUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: "Регистрация пользователя" })
  @ApiResponse({ status: 200 })
  @UsePipes(ValidationPipe)
  @Post("/registration")
  registration(@Body() userDto: RegisterUserDto) {
    return this.authService.registration(userDto);
  }

}
