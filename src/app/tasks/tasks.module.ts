import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './task-create/task-create.component';

@NgModule({
  declarations: [TaskListComponent, TaskDetailComponent, TaskCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent,
    TaskCreateComponent
  ]
})
export class TasksModule { }
