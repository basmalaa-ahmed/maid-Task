import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
  
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoaderInterceptor,
      multi: true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
