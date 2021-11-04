import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AttendancesModule } from './attendances/attendances.module';
import { MovementsModule } from './movements/movements.module';
import { AgendaModule } from './agenda/agenda.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PatientsModule,
    AuthModule,
    AttendancesModule,
    MovementsModule,
    AgendaModule,
    EvaluationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
