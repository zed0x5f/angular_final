import { Injectable } from '@angular/core';

import { Task } from '../shared/models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let blog = (arg) => console.log(arg);

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskRoute = 'http://localhost:3000/tasks';
  tasks: Task[];
  constructor(private http: HttpClient) { }

  private request(options?) {
    return this.http.get<Task[]>(this.taskRoute, options)
  }

  subscribe(lambda: Function) {
    return this.request().subscribe(e => lambda(e));
  }

  getTask(myID, lambda: Function) {
    return this.request({ params: { 'id': myID.toString() } }).subscribe(
      (g) => {
        //works so far
        //blog(e[0]);
        return lambda(g[0]);
      }
    );
  }
}
