import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ApiWordOfficeService } from './services/api-word-office.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [ApiWordOfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
