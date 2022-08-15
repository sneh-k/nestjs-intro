import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() body: UserDto) {
    return this.userService.create(body);
  }

  @Patch(':userId')
  updateUser(@Body() body: UserDto, @Param('userId', ParseIntPipe) id: number) {
    return this.userService.update({ id, ...body });
  }

  @Get(':userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.get(userId);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
