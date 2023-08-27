import { TaskStatus } from './enums/enums';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class Task {
  @IsString()
  @IsOptional()
  public id?: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  public title: string;
  @IsString()
  public description: string;
  @IsEnum(TaskStatus)
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
