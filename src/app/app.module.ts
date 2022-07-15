import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddModalComponent } from './addModal/addModal.component';
import { ColorModalComponent } from './colorModal/colorModal.component';
import { EditWindowsComponent } from './editWindows/editWindows.component';
import { IndexWindowsComponent } from './indexWindows/indexWindows.component';

@NgModule({
  declarations: [
    AppComponent,
    AddModalComponent,
    ColorModalComponent,
    EditWindowsComponent,
    IndexWindowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
