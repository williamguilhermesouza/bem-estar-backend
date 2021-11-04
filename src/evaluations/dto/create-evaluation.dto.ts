export class CreateEvaluationDto {
  id?: number;

  currentDiseaseHistoric: string;

  associateDiseases: string;

  pastDiseases: string;

  familyHistoric: string;

  lifeHabits: string;

  clinicalDiagnosis: string;

  mainComplain: string;

  medication: string;

  mobility: string;

  consciousState: string;

  skinAndMucous: string;

  accessWays: string;

  thoraxFormat: string;

  ventilationType: string;

  ventilationMuscularPattern: string;

  ventilationRhythm: string;

  abdomen: string;

  signals: string;

  symptoms: string;

  thoracicMobility: string;

  lungExpansion: string;

  respiratoryFrequency: number;

  cardiacFrequency: number;

  saturation: number;

  arterialPressure: number;

  temperature: number;

  lungHearing: string;

  cough: string;

  secretion: string;

  ventilationMode: string;

  tonus: string;

  reflexesAndReaction: string;

  muscularStrength: string;

  sensibility: string;

  motorControl: string;

  complimentaryExams: string;

  functionalKineticDiagnosis: string;

  problem: string;

  target: string;

  conduct: string;

  createdAt?: string;

  updatedAt?: string;
}
