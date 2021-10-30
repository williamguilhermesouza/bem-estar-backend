import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Agenda {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  startDateTime: Date;

  @Column()
  endDateTime: Date;

  @Column()
  classes: string;
  
  @CreateDateColumn()
  createdAt?: string;
  
  @UpdateDateColumn()
  updatedAt?: string;
}
