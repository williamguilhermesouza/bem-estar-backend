import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { AttendanceModule } from './attendance/attendance.module';
import { MovimentsModule } from './moviments/moviments.module';
import { PackagesModule } from './packages/packages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const typeormPostgres = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost', // 'localhost' if running locally, 'postgres' if on docker compose
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'bemestar',
  entities: [],
  synchronize: true,
});

const typeormSqlite = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: './localdb.db',
});

@Module({
  imports: [
    typeormSqlite,
    UsersModule,
    PatientsModule,
    AttendanceModule,
    MovimentsModule,
    PackagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
