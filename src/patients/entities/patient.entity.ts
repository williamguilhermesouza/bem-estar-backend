import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  phoneNumber: string;

  @Column()
  streetName: string;

  @Column()
  streetNumber: string;

  @Column()
  streetDistrict: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  birthDate: Date;

  @Column({ unique: true })
  cpf: string;

  @Column({ unique: true })
  email: string;

  @Column()
  color: string;

  @Column()
  civilState: string;

  @Column()
  religion: string;

  @Column()
  scholarship: string;

  @Column()
  profession: string;

  @Column()
  placeOfBirth: string;

  @Column('float')
  weight: number;

  @Column('float')
  height: number;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
