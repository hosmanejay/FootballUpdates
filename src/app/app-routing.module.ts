import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFixtureComponent } from './show-fixture/show-fixture.component';
import { FootballComponent } from './football/football.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: FootballComponent},
  {path:'fixture', component:ShowFixtureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
