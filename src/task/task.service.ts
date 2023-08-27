import { Injectable } from '@nestjs/common';
import { TaskStatus } from './enums/enums';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task One',
      description: 'Make the task dude!',
      status: TaskStatus.PENDING,
    },
  ];

  public findTask(): Task[] {
    return this.tasks;
  }

  public saveTask(title: string, description: string): Task {
    const task = new Task(
      new Date().toISOString(),
      title,
      description,
      TaskStatus.PENDING,
    );

    this.tasks.push(task);
    return task;
  }

  public updateTask() {}
  public removeTask() {}
}
