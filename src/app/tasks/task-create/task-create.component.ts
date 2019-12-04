import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  model: Task = new Task();
  constructor(private taskService: TaskService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.taskService.createTask(this.model)
  }
}
