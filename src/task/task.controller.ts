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
import { CreateTaskDto } from './dto/createTask.dto';
import { UpadateTaskDto } from './dto/updateTask.dto';

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
  public postTask(@Body() task: CreateTaskDto) {
    return this.taskService.saveTask(task);
  }

  @Put(':taskID')
  public putTask(@Param('taskID') id: string, @Body() task: UpadateTaskDto) {
    return this.taskService.updateTask(id, task);
  }

  @Delete(':taskID')
  public deleteTask(@Param('taskID') id: string) {
    return this.taskService.removeTask(id);
  }
}
