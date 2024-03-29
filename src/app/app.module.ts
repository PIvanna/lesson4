import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddzeroPipe } from './main/addzero.pipe';
import { SortPipe } from './main/sort.pipe';
import { SearchPipe } from './main/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddzeroPipe,
    SortPipe,
    SearchPipe
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
