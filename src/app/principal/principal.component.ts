import { Component, OnInit } from '@angular/core';
import { ApiWordOfficeService } from '../services/api-word-office.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarEquipoComponent } from '../modal-agregar-equipo/modal-agregar-equipo.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre', 'estadio', 'sitioweb', 'nacionalidad','anio','entrenador','capacidad','valor','opciones'];
  dataSource = new MatTableDataSource();
  minimo = new Date()
  formFechas = new FormGroup({
    fechaini: new FormControl('',Validators.required),
    fechafin: new FormControl('',Validators.required)
  })
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private api:ApiWordOfficeService) { }

  ngOnInit() {
    this.listarEquipos()
  }


  update(e){
    const dialogRef = this.dialog.open(ModalAgregarEquipoComponent,{
      data:{editar:true,datos:e}
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result == 1){
       this.listarEquipos()
     }
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue == ""){
      this.listarEquipos()
    }else{
      this.api.buscarPorid(filterValue).subscribe((d:any)=>{
        console.log(d);
        this.dataSource.data = [d]
      })
    }
  }

  cambioDeFecha(e){
    this.minimo = e.value
  }

  borrar(id){
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Al aceptar borraras este equipo',
      icon: 'question',
      cancelButtonText: 'Cancelar',
      customClass: { popup: 'swal-height27' },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si,Borrar',
    }).then((result) => {
      if (result.value) {

        this.api.EliminarEquipo(id).subscribe((d:any)=>{
          Swal.fire('Eliminado exitosamente','Se ha Eliminado exitosamente el equipo','success')
          this.listarEquipos()
        },erro=>{
          this._snackBar.open('Ocurrio un error', 'Ok', {
            duration: 5000,
          });
        })
      }
    })
  }

  buscarPorFechas(){
    this.api.buscarPorFecha(moment(this.formFechas.controls.fechaini.value).format('DD-MM-YYYY'),moment(this.formFechas.controls.fechafin.value).format('DD-MM-YYYY')).subscribe((d:any)=>{
      //El buscador por fecha no encontre bien el formato pero sin envargo lo estoy enviado
    },erro=>{
      Swal.fire('Ocurrio un error','Ocurrio un error al consultar por fechas, probe con los diferentes formatos como (YYYY-MM-DD) (DD-MM-YYYY) y incluso prove con el timestamp y tampoco me deja','question')
    })
  }

  listarEquipos(){
    this.api.listarEquipos().subscribe((d:any)=>{
      if(d.length > 0){
        this.dataSource.data = d
      }
    })
  }

  agregarEquipo() {
    const dialogRef = this.dialog.open(ModalAgregarEquipoComponent,{
      data:{editar:false}
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result == 1){
       this.listarEquipos()
     }
    });
  }

}
