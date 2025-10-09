import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTextBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
