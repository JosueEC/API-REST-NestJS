import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  HttpCode,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpadateTaskDto } from './dto/updateTask.dto';
import { Task } from './schemas/task.schema';

@Controller('v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public getTask() {
    return this.taskService.findTask();
  }

  @Get(':taskID')
  public async getOneTask(@Param('taskID') id: string): Promise<Task> {
    return await this.taskService.findOneTask(id);
  }

  @Post()
  public async postTask(@Body() task: CreateTaskDto): Promise<Task> {
    return await this.taskService.saveTask(task);
  }

  @Put(':taskID')
  public async putTask(
    @Param('taskID') id: string,
    @Body() task: UpadateTaskDto,
  ): Promise<Task> {
    return await this.taskService.updateTask(id, task);
  }

  @Delete(':taskID')
  @HttpCode(204)
  public async deleteTask(@Param('taskID') id: string): Promise<Task> {
    return await this.taskService.removeTask(id);
  }
}
