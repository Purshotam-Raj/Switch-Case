import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopComponent } from './loop/loop.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { ClassNameSetComponent } from './class-name-set/class-name-set.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopComponent,
    DynamicStyleComponent,
    ClassNameSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
