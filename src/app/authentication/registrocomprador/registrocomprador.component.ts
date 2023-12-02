import { Component } from '@angular/core';

import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-registrocomprador',
  templateUrl: './registrocomprador.component.html',
  styleUrls: ['./registrocomprador.component.css'],
})
export class registrocompradorComponent  {

  newUser: any = {
    nombres:  '',
    apellidoPaterno: '',
    apellidoMaterno:  '',
    dni: '',
    correoElectronico: '',
    contrasena:'',
    aceptar: false,

  };
  constructor(private userService: UserService){
  }

  registerUser(){
    this.userService.registerUser(this.newUser).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
