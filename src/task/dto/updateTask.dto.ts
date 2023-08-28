import { TaskStatus } from '../enums/enums';

export interface UpadateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
