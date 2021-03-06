import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { MyroutesModule } from './myroutes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TasksModule,
    //myroutes must be last to be imported
    //ya fool  
    MyroutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
