import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Programmer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;
  @Column()
  age: number;
  @Column()
  language: string;
  @Column()
  location: string;

  @Column({ default: false })
  isEmployed: boolean;
}
