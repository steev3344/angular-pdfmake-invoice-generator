import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FinanceComponent } from './components/finance/finance.component';
import {BillPageComponent} from './components/bill-page/bill-page.component'
@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    BillPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
