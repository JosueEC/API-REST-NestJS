import { TaskStatus } from './enums/enums';

export class Task {
  public id?: string;
  public title: string;
  public description: string;
  public status: TaskStatus;

  constructor(
    id: string,
    title: string,
    description: string,
    status: TaskStatus,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
