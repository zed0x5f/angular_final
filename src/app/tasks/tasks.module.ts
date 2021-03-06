import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskPageComponent } from './task-page/task-page.component';

const components = [
  TaskListComponent,
  TaskCreateComponent,
  TaskPageComponent,
]
@NgModule({
  declarations: [
    // @ts-ignore
    ...components,
    TaskDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class TasksModule { }
