import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskPageComponent } from './task-page/task-page.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    TaskCreateComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent,
    TaskCreateComponent,
    TaskPageComponent
  ]
})
export class TasksModule { }
