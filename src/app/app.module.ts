import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { IhcharactersComponent } from './ihcharacters/ihcharacters.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'characters', component: IhcharactersComponent}
];

import { AppComponent } from './app.component';

import { IhService } from './services/ih.service';


@NgModule({
  declarations: [
    AppComponent,
    IhcharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IhService],
  bootstrap: [AppComponent]
})
export class AppModule { }
