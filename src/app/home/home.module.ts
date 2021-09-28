import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ParsaComponent } from './parsa/parsa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'parsa',
    component: ParsaComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ParsaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
