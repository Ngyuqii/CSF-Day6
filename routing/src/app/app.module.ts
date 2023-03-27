import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WhaleComponent } from './components/whale/whale.component';
import { SharkComponent } from './components/shark/shark.component';
import { TurtleComponent } from './components/turtle/turtle.component';
import { PvComponent } from './components/turtle/pv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhaleComponent,
    SharkComponent,
    TurtleComponent,
    PvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
