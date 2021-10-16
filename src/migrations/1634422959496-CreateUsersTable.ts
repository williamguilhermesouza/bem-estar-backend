import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1634422959496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE users (
            id int,
            name varchar(30),
            sex varchar(30),
            phone_number varchar(30),
            street_name varchar(30),
            street_number varchar(30),
            street_district varchar(30),
            city varchar(30),
            state varchar(30),
            birth_date date,
            cpf varchar(30)
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
