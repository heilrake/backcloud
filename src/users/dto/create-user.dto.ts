// Core
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test1@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'James',
  })
  fullName: string;

  @ApiProperty({
    default: '12345678',
  })
  password: string;
}
