import { TaskStatus } from './enums/enums';

export class Task {
  private id: string;
  private title: string;
  private description: string;
  private status: TaskStatus;
}
