import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from '../task.service';
import { BlockingProxy } from 'blocking-proxy';
let blog = e => console.log(e)
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  taskCatcher = (e) => { this.tasks.push(e) };

  deleteTask(id: number) {
    this.taskService.deleteTask(id, e => {
      this.tasks = this.tasks.filter(elm => elm.id != id)
    })
  }
}
