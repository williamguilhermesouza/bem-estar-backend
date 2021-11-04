import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  currentDiseaseHistoric: string;

  @Column()
  associateDiseases: string;

  @Column()
  pastDiseases: string;

  @Column()
  familyHistoric: string;

  @Column()
  lifeHabits: string;

  @Column()
  clinicalDiagnosis: string;

  @Column()
  mainComplain: string;

  @Column()
  medication: string;

  @Column()
  mobility: string;

  @Column()
  consciousState: string;

  @Column()
  skinAndMucous: string;

  @Column()
  accessWays: string;

  @Column()
  thoraxFormat: string;

  @Column()
  ventilationType: string;

  @Column()
  ventilationMuscularPattern: string;

  @Column()
  ventilationRhythm: string;

  @Column()
  abdomen: string;

  @Column()
  signals: string;

  @Column()
  symptoms: string;

  @Column()
  thoracicMobility: string;

  @Column()
  lungExpansion: string;

  @Column('float')
  respiratoryFrequency: number;

  @Column('float')
  cardiacFrequency: number;

  @Column('float')
  saturation: number;

  @Column('float')
  arterialPressure: number;

  @Column('float')
  temperature: number;

  @Column()
  lungHearing: string;

  @Column()
  cough: string;

  @Column()
  secretion: string;

  @Column()
  ventilationMode: string;

  @Column()
  tonus: string;

  @Column()
  reflexesAndReaction: string;

  @Column()
  muscularStrength: string;

  @Column()
  sensibility: string;

  @Column()
  motorControl: string;

  @Column()
  complimentaryExams: string;

  @Column()
  functionalKineticDiagnosis: string;

  @Column()
  problem: string;

  @Column()
  target: string;

  @Column()
  conduct: string;

  @Column()
  observations?: string;

  @CreateDateColumn()
  createdAt?: string;

  @UpdateDateColumn()
  updatedAt?: string;
}
