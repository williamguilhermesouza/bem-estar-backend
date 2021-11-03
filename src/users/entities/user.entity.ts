import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  sex?: string;

  @Column()
  phoneNumber?: string;

  @Column()
  streetName?: string;

  @Column()
  streetNumber?: string;

  @Column()
  streetDistrict?: string;

  @Column()
  city?: string;

  @Column()
  state?: string;

  @Column({ nullable: true })
  birthDate?: Date;

  @Column({ unique: true })
  cpf: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
