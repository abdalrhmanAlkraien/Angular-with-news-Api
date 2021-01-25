import { NewsCardComponent } from './news-card/news-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevlopmentComponent } from './devlopment/devlopment.component';

const routes: Routes = [
  {
    path:"dev",
    component:DevlopmentComponent
  },
  {
    path:"news/:id",
    component:NewsCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
