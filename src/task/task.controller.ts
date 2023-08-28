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
import { Task } from './schemas/task.schema';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public getTask() {
    return this.taskService.findTask();
  }

  @Get(':taskID')
  public getOneTask(@Param('taskID') id: string) {
    return this.taskService.findOneTask(id);
  }

  @Post()
  public postTask(@Body() task: Task) {
    return this.taskService.saveTask(task);
  }

  @Put(':taskID')
  public putTask(@Param('taskID') id: string, @Body() task: Task) {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':taskID')
  public deleteTask(@Param('taskID') id: string) {
    return this.taskService.removeTask(id);
  }
}
