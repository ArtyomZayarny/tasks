import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): import("./task.model").Task[];
    createTask(title: string, description: string): import("./task.model").Task;
    deleteTask(id: string): void;
}
