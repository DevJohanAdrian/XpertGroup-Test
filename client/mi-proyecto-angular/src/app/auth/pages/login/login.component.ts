import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.success) {
        this.authService.setUser(response.responseObject._id)
        this.router.navigate(['/protected']);
        } else {
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      },
      error => {
        this.errorMessage = 'Ocurrió un error en el login';
      }
    );
  }
}
