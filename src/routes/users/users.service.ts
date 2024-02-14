// users/users.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];

  async listUsers() {
    return this.users;
  }
}