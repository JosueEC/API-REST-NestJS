import { TaskStatus } from '../enums/enums';

export interface TaskDto {
  title: string;
  description?: string;
  status?: TaskStatus;
}
