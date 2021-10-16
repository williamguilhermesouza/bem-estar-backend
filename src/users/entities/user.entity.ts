import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  phone_number: string;

  @Column()
  street_name: string;

  @Column()
  street_number: string;

  @Column()
  street_district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  birth_date: Date;

  @Column()
  cpf: string;
}
