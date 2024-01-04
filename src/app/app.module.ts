import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './components/gamepage/gamepage.component';
import { BankerComponent } from './components/banker/banker.component';
import { MoneyboxComponent } from './components/moneybox/moneybox.component';

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    BankerComponent,
    MoneyboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
