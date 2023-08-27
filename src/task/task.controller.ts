import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
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

  @Get(':taskID')
  public getOneTask(@Param('taskID') id: string): Task {
    return this.taskService.findOneTask(id);
  }

  @Post()
  public postTask(@Body() task: Task): Task {
    return this.taskService.saveTask(task);
  }

  @Put(':taskID')
  public putTask(@Param('taskID') id: string, @Body() task: Task) {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':taskID')
  public deleteTask(@Param('taskID') id: string): Task {
    return this.taskService.removeTask(id);
  }
}
