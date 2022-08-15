import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GenderType } from '../dto/user-dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: GenderType;

  @Column()
  password: string;
}
