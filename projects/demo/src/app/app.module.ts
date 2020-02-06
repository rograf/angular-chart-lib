import { NgcChartsModule } from './../../../ngc-charts/src/lib/ngc-charts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgcChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
