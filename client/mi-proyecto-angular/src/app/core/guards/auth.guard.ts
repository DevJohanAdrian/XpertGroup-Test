import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private userId: string= '';
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    this.userId = this.authService.sharedUserId()
    if (this.authService.getUser(this.userId)) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
