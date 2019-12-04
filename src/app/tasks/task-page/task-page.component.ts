import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/shared/models/task';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TaskService } from '../task.service';

let blog = (arg: any) => console.log(arg);

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  public task: Task;

  constructor(
    private route: ActivatedRoute,
    //not being used
    //private router: Router,
    private service: TaskService
  ) { }

  getTask() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.service.getTask(params.get('id'), (e: Task) => { this.task = e; });
      }
    )
  }

  ngOnInit() {
    this.getTask();
  }
}
