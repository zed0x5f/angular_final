import { Component, OnInit, Input } from '@angular/core';

import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task:Task;
  //todo add detail redirect to component

  onClickView(){}
  
  onDelete(){}

  constructor() { }

  ngOnInit() {
  }

}
