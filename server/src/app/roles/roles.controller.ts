import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Роли")
@Controller("roles")
export class RolesController {
  constructor(private rolesService: RolesService) {
  }

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.postCreateRole(dto);
  }

  @Get("/:value")
  getByValue(@Param("value") value: string) {
    return this.rolesService.getRoleByValue(value);
  }
}

