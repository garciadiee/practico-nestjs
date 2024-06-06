/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(taskData: Partial<Task>): Promise<Task> {
    const task = this.tasksRepository.create(taskData);
    return await this.tasksRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async getTaskById(id): Promise<Task> {
    return await this.tasksRepository.findOne(id);
  }

  async updateTask(id: number, taskData: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, taskData);
    return this.getTaskById(id);
  }

  async deleteTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}

