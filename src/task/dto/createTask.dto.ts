import { TaskStatus } from '../enums/enums';

export interface CreateTaskDto {
  title: string;
  description?: string;
  status?: TaskStatus;
}
