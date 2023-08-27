import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/taskdb'),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
