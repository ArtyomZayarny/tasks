import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ) {
        return this.tasksService.createTask(title, description)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(id)
    }
    @Patch('/:id/title')
    updateTask(
        @Param('id') id: string,
        @Body('title') title: string
    ) {
        return this.tasksService.updateTask(id, title)
    }
}
