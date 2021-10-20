import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAttendancesTable1634760404769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'attendance',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'attendanceDate',
                  type: 'date',
                  isNullable: false,
                },
                {
                  name: 'doneProcedures',
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
        await queryRunner.dropTable('attendance');
    }

}
