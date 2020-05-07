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
  public model: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  buggyGetTask() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.taskService.getTask(parseInt(params.get('id')), (e: Task) => { this.model = e; });
      }
    )
  }

  ngOnInit() {
    this.buggyGetTask();
  }
  onSubmit() {
    this.taskService.updateTask(this.model.id, e => {
      //console.log("task emiited:", e)
      this.model = e
    })
  }
}
