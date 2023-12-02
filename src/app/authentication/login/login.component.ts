import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  onSubmit() {
    // Aquí puedes realizar acciones adicionales con los datos, como enviar a un servicio o validar.
    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.contrasena);
  }

}
