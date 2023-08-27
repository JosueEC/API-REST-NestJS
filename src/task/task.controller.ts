import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
  // * http://localhost:3000/task
  @Get()
  public helloWorld() {
    return 'GET Tasks';
  }
}
