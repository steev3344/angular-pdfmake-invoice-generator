import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './components/finance/finance.component';
import {BillPageComponent} from './components/bill-page/bill-page.component'

const routes: Routes = [
  {path:'',component:BillPageComponent},
  { path: 'finance', component: FinanceComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
