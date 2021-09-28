import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';
import { HeaderComponent } from './header/header.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    FullLayoutComponent,
    SimpleLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
