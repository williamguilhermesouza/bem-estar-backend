import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAgendaTable1635549739808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'agenda',
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
                name: 'startDateTime',
                type: 'date',
                isNullable: false,
              },
              {
                name: 'endDateTime',
                type: 'date',
                isNullable: false,
              },
              {
                name: 'classes',
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
        await queryRunner.dropTable('agenda');
    }

}
