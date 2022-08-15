import { IsEnum, IsString } from 'class-validator';

export enum GenderType {
  'F' = 'F',
  'M' = 'M',
  'O' = 'O',
}

export class UserDto {
  @IsString()
  name: string;

  @IsEnum(GenderType)
  gender: string;

  @IsString()
  password: string;
}
