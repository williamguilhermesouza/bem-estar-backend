import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Rpg {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('int', { nullable: true })
  patientId: number;

  @Column()
  rightFeet: string;

  @Column()
  leftFeet: string;

  @Column()
  rightAnkle: string;

  @Column()
  leftAnkle: string;

  @Column()
  rightKnee: string;

  @Column()
  leftKnee: string;

  @Column()
  pelvis: string;

  @Column()
  lumbar: string;

  @Column()
  dorsal: string;

  @Column()
  cervical: string;

  @Column()
  rightShoulder: string;

  @Column()
  leftShoulder: string;

  @Column()
  shoulderBlade: string;

  @Column()
  head: string;

  @Column()
  observations: string;

  @Column()
  physiotherapyDiagnosis: string;

  @Column()
  rehabTarget: string;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
