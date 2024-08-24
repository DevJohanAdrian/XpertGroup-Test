import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe(
      user => {
        this.user = user;
      },
      () => {
        console.error('No se pudo obtener la información del usuario');
      }
    );
  }
}
