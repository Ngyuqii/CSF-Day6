import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PvComponent } from './components/turtle/pv.component';
import { SharkComponent } from './components/shark/shark.component';
import { WhaleComponent } from './components/whale/whale.component';
import { TurtleComponent } from './components/turtle/turtle.component';

const routes: Routes = [
  {path:'main', component: HomeComponent },
  {path:'whale', component: WhaleComponent},
  {path:'shark', component: SharkComponent},
  {path:'adoptaturtle', component: TurtleComponent},
  {path:'adoptaturtle/:pvId', component: PvComponent},
  {path:'**', redirectTo:'/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
