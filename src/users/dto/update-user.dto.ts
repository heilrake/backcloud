// Core
import { PartialType } from '@nestjs/mapped-types';

// Utils
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
