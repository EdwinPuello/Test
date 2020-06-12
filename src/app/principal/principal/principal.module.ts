import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from '../principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { ModalAgregarEquipoComponent } from 'src/app/modal-agregar-equipo/modal-agregar-equipo.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [PrincipalComponent,NavbarComponent,ModalAgregarEquipoComponent],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    CommonModule,
    PrincipalRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],entryComponents:[
    ModalAgregarEquipoComponent
  ]
})
export class PrincipalModule { }
