import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fristname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
