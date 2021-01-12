import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.loginCurrentUser(this.loginForm.value)
      .subscribe(res => {
          localStorage.setItem('token', res.result.token);
          this.router.navigateByUrl('/user-profile');
        },
        err => console.log(err),
      );
  }

}
