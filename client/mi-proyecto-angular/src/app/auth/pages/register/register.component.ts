import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.username, this.password).subscribe(
      response => {
        if (response.success) {
          this.successMessage = 'Usuario registrado exitosamente';
        } else {
          this.errorMessage = 'No se pudo registrar el usuario';
        }
      },
      error => {
        this.errorMessage = 'Ocurrió un error en el registro';
      }
    );
  }
}
