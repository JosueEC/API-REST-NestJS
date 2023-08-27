import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  public findTask(): Task[] {
    return this.tasks;
  }

  public findOneTask(id: string): Task {
    const response = this.tasks.find((task) => task.id == id);
    return response;
  }

  public saveTask(task: Task): Task {
    const newTask = new Task(v4(), task.title, task.description, task.status);

    this.tasks.push(newTask);
    return task;
  }

  public updateTask() {}

  public removeTask(id: string): Task {
    const removedTask = this.tasks.find((task) => (task.id = id));

    this.tasks = this.tasks.filter((task) => {
      return task.id !== id;
    });

    return removedTask;
  }
}
