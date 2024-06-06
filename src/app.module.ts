/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Configuración de TypeORM
      type:'sqlite',
      database: 'db.sqlite',
      entities: [Task],
      synchronize: true
    }),
    TasksModule, // Importa el módulo TasksModule
  ],
})
export class AppModule {}
