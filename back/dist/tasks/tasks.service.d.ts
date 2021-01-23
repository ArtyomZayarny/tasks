import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateTask(id: string, title: string): Task;
}
