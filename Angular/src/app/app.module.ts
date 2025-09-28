import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import { DxTextBoxModule } from 'devextreme-angular';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxTextBoxModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }