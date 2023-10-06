import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballComponent } from './football/football.component';
import { ResultGridComponent } from './result-grid/result-grid.component';
import { ShowFixtureComponent } from './show-fixture/show-fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    ResultGridComponent,
    ShowFixtureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
