/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Param, Body} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.entity';


@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() taskData: Partial<Task>): Promise<Task> {
    return this.tasksService.createTask(taskData);
  }

  @Patch(':id')
  async updateTask(@Param('id') id: number, @Body() taskData: Partial<Task>): Promise<Task> {
    return this.tasksService.updateTask(id, taskData);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
