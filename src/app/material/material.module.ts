import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
