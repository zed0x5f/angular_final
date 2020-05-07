import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;

  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  onDelete = () => { this.taskDeleted.emit(this.task.id); }

  constructor() { }

  ngOnInit() {
  }

}
