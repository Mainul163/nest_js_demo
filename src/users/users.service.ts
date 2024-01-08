import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { user } from './user.entity';
// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<user>,
  ) {}

  async findAll(): Promise<user[]> {
    return this.userRepository.find();
  }
}

// private readonly users = [
//   {
//     userId: 1,
//     username: 'john',
//     password: 'changeme',
//   },
//   {
//     userId: 2,
//     username: 'maria',
//     password: 'guess',
//   },
// ];

// async findOne(username: string): Promise<User | undefined> {
//   return this.users.find((user) => user.username === username);
// }
