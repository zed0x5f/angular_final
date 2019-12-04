import { Component, OnInit } from '@angular/core';
//why do i want to use this?
import { switchMap } from 'rxjs/operators';

import { Task } from 'src/app/shared/models/task';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TaskService } from '../task.service';

let blog = (arg) => console.log(arg);

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  public task: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskService
  ) { }

  ngOnInit() {
    let me = this;//currently unescessary
    let blog = (e: any) => console.log(e);
    //console.log(this.route);    
    var id: string;
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        //blog('task 2');
        id = params.get('id');
      }
    )
    blog('task');
    blog(id)
    var foo = this.service.getTask(id, (e) => {
      blog('task page e')
      me.task = e;
      blog(this === me);
    });
    blog(foo)
    blog(this.task)
  }
}
