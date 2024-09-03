import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  user: any;
  private userId: string= '';


  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userId = this.authService.sharedUserId()
    this.authService.getUser(this.userId).subscribe(
      user => {
        this.user = user.responseObject;
      },
      () => {
        console.error('No se pudo obtener la información del usuario');
      }
    );
  }
}
