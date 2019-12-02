import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';

let make = (a: string, b: any) => { return { path: a, component: b } };

export class R {
  private static outes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    make('home', TaskListComponent),
  ];

  static getRoutes(): Routes {
    return R.outes;
  }

  static getPaths(): string[] {
    return R.outes.filter(e => e['redirectTo'] !== undefined).map(e => e.path);
  }

  static getComponent(): any[] {
    return R.outes.filter(e => e['component'] !== undefined).map(e => e.component);
  }
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(R.getRoutes())
  ],
  exports: [RouterModule]
})
export class MyroutesModule { }
