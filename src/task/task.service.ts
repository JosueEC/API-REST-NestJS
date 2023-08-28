import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpadateTaskDto } from './dto/updateTask.dto';
import { Task } from './schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  public async findTask(): Promise<Task[]> {
    const response = await this.taskModel.find();
    return response;
  }

  public async findOneTask(id: string): Promise<Task> {
    const response = await this.taskModel.findById({ _id: id });

    if (!response) {
      throw new NotFoundException('Task noy found');
    }

    return response;
  }

  public async saveTask(task: CreateTaskDto): Promise<Task> {
    try {
      const response = await this.taskModel.create(task);
      return response;
    } catch (error) {
      if (error === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  public async updateTask(id: string, task: UpadateTaskDto): Promise<Task> {
    const response = await this.taskModel.findByIdAndUpdate({ _id: id }, task, {
      new: true,
    });

    if (!response) {
      throw new NotFoundException('Task not found');
    }

    return response;
  }

  public async removeTask(id: string): Promise<Task> {
    const response = await this.taskModel.findByIdAndRemove({ _id: id });

    if (!response) {
      throw new NotFoundException('Task not found');
    }

    return response;
  }
}
