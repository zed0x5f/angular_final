import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/models/task';
let blog = (e) => console.log(e);

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskRoute = 'http://localhost:3000/tasks';
  tasks: Task[];
  constructor(private http: HttpClient) { }

  private request(options?: any) {
    return this.http.get<Task[]>(this.taskRoute, options)
  }

  subscribe(lambda: Function) {
    return this.request().subscribe(e => lambda(e));
  }

  getTask(myID: string, lambda: Function) {
    return this.request({ params: { 'id': myID } }).subscribe((g) => lambda(g[0]));
  }

  createTask(arr) {
    //TODO:
    blog(arr)
  }

  updateTask() {
    //TODO:
  }
}
