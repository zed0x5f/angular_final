import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/app/shared/models/task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private taskRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];
  getTasks() {
    this.http.get<Task[]>(this.taskRoute).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTasks();
  }

}
