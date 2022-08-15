import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user-entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
    // return { name: 'Sneha', gender: 'F' };
  }

  create(body) {
    return this.userRepository.save(body);
    // return { name, gender };
  }

  update(body) {
    return this.userRepository.update(body.id, body);
    // return body;
  }

  get(id: number) {
    return this.userRepository.findOne({ where: { id } });
    // return this.userRepository.findOne({ where: { id: userId } });
    // return params;
  }

  getByName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }

  delete(id: number) {
    return this.userRepository.delete(id);
    // return params;
  }
}
