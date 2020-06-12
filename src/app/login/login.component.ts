import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    //Aqui vaido que sea un correo valido
    email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/) ]),
    //Aca que la contraseña tenga minimo 6 caracteres
    pass: new FormControl('', [Validators.required,Validators.minLength(6)])
  });

  constructor(private _snackBar: MatSnackBar,private ruta: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.loginForm.valid){
      this.ruta.navigate(['/principal'])
    }else{
      this._snackBar.open("Debes llenar primero los datos", 'Ok', {
        duration: 2000,
      });
    }
  }

}
