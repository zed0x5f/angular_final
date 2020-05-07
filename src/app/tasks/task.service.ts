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
  constructor(public http: HttpClient) { }

  private get(options?: any) {
    return this.http.get<Task[]>(this.taskRoute, options)
  }

  subscribe(lambda: Function) {
    return this.get().subscribe(e => lambda(e));
  }

  deleteTask(myID: number, lambda: Function) {
    return this.http.delete(`${this.taskRoute}/${myID}`).subscribe(e => lambda(e))
  }

  getTask(myID: number, lambda: Function) {
    return this.get({ params: { 'id': myID } }).subscribe((g) => lambda(g[0]));
  }

  updateTask(myID: number, lambda: Function) {
    //TODO:
    return this.http.patch(`${this.taskRoute}/${myID}`, e => lambda(e))
  }



  createTask(arr, lambda: Function) {
    //TODO: get a better auto id system    
    this.subscribe(e => {
      this.http.post<Task>(this.taskRoute, {
        id: Math.max(e.length, parseInt(e[e.length - 1].id) + 1),
        ...arr
      }).subscribe(g => lambda(g))
    });
  }


}
