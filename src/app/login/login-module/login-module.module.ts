import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from '../login.component';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    LoginModuleRoutingModule
  ]
})
export class LoginModuleModule { }
