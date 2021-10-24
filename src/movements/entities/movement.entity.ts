import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('int')
  patientId: number;

  @Column()
  description: string;

  @Column('float')
  value: number;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
