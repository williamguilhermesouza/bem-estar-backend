import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { AttendanceModule } from './attendance/attendance.module';
import { MovimentsModule } from './moviments/moviments.module';
import { PackagesModule } from './packages/packages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
