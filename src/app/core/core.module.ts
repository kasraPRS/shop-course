import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpRequest, HttpResponse } from "@angular/common/http";
import { HttpRequestInterceptor } from './Interceptors/http-request.interceptors';
import { HttpResponseInterceptors } from './Interceptors/http-response.interceptor';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptors,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule
  ]
})
export class CoreModule {
}
