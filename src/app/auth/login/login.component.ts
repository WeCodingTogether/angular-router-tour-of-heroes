import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  getMessage() {
    return 'Logged' + (this.authService.isLoggedIn ? ' in' : ' out');
  }

  login() {
    this.message = 'Trying to log in...';
    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if(this.authService.isLoggedIn) {
        const redirectUrl = '/admin';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        }
        this.router.navigate([redirectUrl], navigationExtras);
        // redirectUrl 被包装在一个数组中 [redirectUrl]
        // navigate() 方法接受一个数组作为参数，而不是一个简单的字符串。这个数组的目的是指定导航目标的路由器链接参数。
      }
    })
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
