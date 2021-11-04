import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePatientsTable1634687771428 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'patient',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sex',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'streetName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'streetNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'streetDistrict',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'civilState',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'religion',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'scholarship',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'profession',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'placeOfBirth',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'weight',
            type: 'float',
            isNullable: false,
          },
          {
            name: 'height',
            type: 'float',
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
    await queryRunner.dropTable('patient');
  }
}
