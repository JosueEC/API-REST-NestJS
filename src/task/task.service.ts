import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  // Esta es la forma en la que se inyecta el modelo dentro de
  // nuestra clase, para poder acceder a sus metodos
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  public findTask() {
    const response = this.taskModel.find();
    console.info(typeof response);
    return response;
  }

  public findOneTask(id: string) {
    return this.taskModel.findById({ _id: id });
  }

  public saveTask(task: Task) {
    return this.taskModel.create(task);
  }

  public updateTask(id: string, task: Task) {
    return this.taskModel.findByIdAndUpdate(id, task);
  }

  public removeTask(id: string) {
    return this.taskModel.findByIdAndRemove({ _id: id });
  }
}
