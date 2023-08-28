import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  public async findTask(): Promise<Task[]> {
    const response = await this.taskModel.find();
    return response;
  }

  public async findOneTask(id: string): Promise<Task> {
    const response = await this.taskModel.findById({ _id: id });
    return response;
  }

  public async saveTask(task: TaskDto): Promise<Task> {
    const response = await this.taskModel.create(task);
    return response;
  }

  public async updateTask(id: string, task: TaskDto): Promise<Task> {
    const response = await this.taskModel.findByIdAndUpdate(id, task);
    return response;
  }

  public async removeTask(id: string): Promise<Task> {
    const response = await this.taskModel.findByIdAndRemove({ _id: id });
    return response;
  }
}
