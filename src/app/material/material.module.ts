import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatListModule
  ]
})
export class MaterialModule { }
