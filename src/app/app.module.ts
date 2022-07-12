import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddModalComponent } from './addModal/addModal.component';
import { ColorModalComponent } from './colorModal/colorModal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    ColorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
