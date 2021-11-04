import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEvaluationsTable1636043545679 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'evaluation',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'currentDiseaseHistoric',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'associateDiseases',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'pastDiseases',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'familyHistoric',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lifeHabits',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'clinicalDiagnosis',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mainComplain',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'medication',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'mobility',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'consciousState',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'skinAndMucous',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'accessWays',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'thoraxFormat',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ventilationType',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ventilationMuscularPattern',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ventilationRhythm',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'abdomen',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'signals',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'symptoms',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'thoracicMobility',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lungExpansion',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'respiratoryFrequency',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'cardiacFrequency',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'saturation',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'arterialPressure',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'temperature',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'lungHearing',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cough',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'secretion',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ventilationMode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'tonus',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'reflexesAndReaction',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'muscularStrength',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sensibility',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'motorControl',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'complimentaryExams',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'functionalKineticDiagnosis',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'problem',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'target',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'conduct',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'updatedAt',
            type: 'date',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('evaluation');
  }
}
