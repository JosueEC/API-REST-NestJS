import { TaskStatus } from '../enums/enums';
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpadateTaskDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(100)
  title?: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(100)
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
