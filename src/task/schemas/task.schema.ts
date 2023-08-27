import { TaskStatus } from '../enums/enums';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  public title: string;

  @Prop({
    trim: true,
  })
  public description: string;

  @Prop({
    default: TaskStatus.PENDING,
  })
  public status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
