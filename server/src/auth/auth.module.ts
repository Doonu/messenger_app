import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import * as process from "process";
import { UsersModule } from "../users/users.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule), JwtModule.register({
    secret: process.env.PRIVATE_KEY || "secret",
    signOptions: {
      expiresIn: "24h"
    }
  })],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {
}
