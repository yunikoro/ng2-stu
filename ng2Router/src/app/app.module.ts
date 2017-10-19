import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterConfigModule } from './app-router-config/app-router-config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
