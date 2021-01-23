import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model'
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
    private tasks = [];

    getAllTasks(): Task[] {
        return this.tasks
    }
    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    updateTask(id: string, title: string): Task {
        const task = this.tasks.find(task => task.id === id)
        task.title = title;
        return task
    }
}
