import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankscreenComponent } from './bankscreen/bankscreen.component';


const routes: Routes = [
  {path:'bankscreen',component:BankscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
