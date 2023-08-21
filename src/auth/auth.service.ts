// Core
import { Injectable } from '@nestjs/common';

// Other
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
  }
}
