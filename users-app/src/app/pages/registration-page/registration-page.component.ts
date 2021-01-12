import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.sass']
})
export class RegistrationPageComponent {

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.registerNewUser(this.registrationForm.value)
      .subscribe(res => {
          localStorage.setItem('token', res.result.token);
          this.router.navigateByUrl('/user-profile');
        },
        err => console.log(err)
      );
  }

}
