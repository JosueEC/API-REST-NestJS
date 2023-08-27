import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get()
  public getTask(): Task[] {
    return this.taskService.findTask();
  }

  @Post()
  public postTask(@Body() task: Task): Task {
    return this.taskService.saveTask(task);
  }
}
