import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import {ExecutionContextHost} from "@nestjs/core/helpers/execution-context-host";
// Guard для доступ к эндпоинтам для проверки авторизован пользователь или нет
// Проверка токена который приходит от пользователя
@Injectable()
export class JwtAuthGuard implements CanActivate {

  constructor(private jwtService: JwtService) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new UnauthorizedException({ message: "Пользователь не авторизован" });
      }

      const user = this.jwtService.verify(token);
      req.userId = user.id

      return true
    } catch (e) {
      throw new UnauthorizedException({ message: "Пользователь не авторизован" });
    }
  }
}

