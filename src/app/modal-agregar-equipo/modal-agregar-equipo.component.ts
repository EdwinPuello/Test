import { Component, OnInit, Inject } from '@angular/core';
import { ApiWordOfficeService } from '../services/api-word-office.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-agregar-equipo',
  templateUrl: './modal-agregar-equipo.component.html',
  styleUrls: ['./modal-agregar-equipo.component.css']
})
export class ModalAgregarEquipoComponent implements OnInit {
  form = new FormGroup({
    nombre:  new FormControl('',Validators.required),
    estadio: new FormControl('',Validators.required),
    entrenador: new FormControl('',Validators.required),
    capacidad: new FormControl('',Validators.required),
    fundacion: new FormControl('',Validators.required),
    nacionalidad: new FormControl('',Validators.required),
    sitioWeb: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private api:ApiWordOfficeService,private dialog:MatDialogRef<any>,private _snackBar: MatSnackBar) { 

    console.log(data);
    if(this.data.editar){
      this.setValue()
    }
  }

  setValue(){
    this.form.controls.estadio.setValue(this.data.datos.estadio)
    this.form.controls.entrenador.setValue(this.data.datos.entrenador)
    this.form.controls.capacidad.setValue(this.data.datos.capacidad)
    this.form.controls.fundacion.setValue(moment(this.data.datos.fundacion).toDate())
    this.form.controls.nacionalidad.setValue(this.data.datos.nacionalidad)
    this.form.controls.sitioWeb.setValue(this.data.datos.sitioWeb)
    this.form.controls.valor.setValue(this.data.datos.valor)
    this.form.controls.nombre.setValue(this.data.datos.nombre)
  }
  ngOnInit() {
  }

  crearEquipo(){
    let data = {
      nombre:this.form.controls.nombre.value,
      estadio:this.form.controls.estadio.value,
      entrenador:this.form.controls.entrenador.value,
      capacidad:this.form.controls.capacidad.value,
      fundacion:moment(this.form.controls.fundacion.value).format('YYYY-MM-DD'),
      nacionalidad:this.form.controls.nacionalidad.value,
      sitioWeb:this.form.controls.sitioWeb.value,
      valor:this.form.controls.valor.value,
    }
    if(this.form.valid){

      if(this.data.editar){
        this.api.actualizarEquipo(this.data.datos.id,data).subscribe((d:any)=>{
          this.dialog.close(1)
          Swal.fire('Editado exitosamente','Se ha editado exitosamente el equipo','success')
        },erro=>{
          this._snackBar.open('Ocurrio un error', 'Ok', {
            duration: 5000,
          });
        })
      }else{
        this.api.crearEquipo(data).subscribe((d:any)=>{
          this.dialog.close(1)
          Swal.fire('Creado exitosamente','Se ha creado exitosamente el equipo','success')
        },erro=>{
          this._snackBar.open('Ocurrio un error', 'Ok', {
            duration: 5000,
          });
        })
      }

    }
  }

}
