import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRpgsTable1636047497372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rpg',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'rightFeet',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'leftFeet',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rightAnkle',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'leftAnkle',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rightKnee',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'leftKnee',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'pelvis',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lumbar',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'dorsal',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cervical',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rightShoulder',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'leftShoulder',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'shoulderBlade',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'head',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'observations',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'physiotherapyDiagnosis',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'rehabTarget',
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
    await queryRunner.dropTable('rpg');
  }
}
