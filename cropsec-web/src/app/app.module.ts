import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonHelper } from 'src/Helper/CommonHelper';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlphaInterceptor } from 'src/Helper/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AlphaInterceptor,
      multi: true
    },
    CommonHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
