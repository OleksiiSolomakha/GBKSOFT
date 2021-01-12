import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {UserFull} from '../../interfaces/UserFull';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map, tap} from 'rxjs/operators';
import {UserResponseObject} from '../../interfaces/UserResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.sass']
})
export class UserProfilePageComponent implements OnInit {

  public formData = new FormData();
  public user$ = new Observable<UserFull>();
  public userProfileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  private getCurrentUser(): void {
    this.user$ = this.userService.getCurrentUser()
      .pipe(
        map((res: UserResponseObject) => res.result),
        tap( (user: UserFull) => {
          this.onFormInit(user);
        })
      );
  }

  private onFormInit(user: UserFull): void {
    this.userProfileForm.controls.firstName.setValue(user.firstName);
    this.userProfileForm.controls.lastName.setValue(user.lastName);
    this.userProfileForm.controls.gender.setValue(user.gender);
    this.userProfileForm.controls.city.setValue(user.city);
    this.userProfileForm.controls.country.setValue(user.country);
  }

  public onSubmit(): void {
    this.userService.updateUserProfile(this.userProfileForm.value).subscribe();
    this.router.navigateByUrl('/users-list');
  }

  public setImage(event: Event): void {
    // @ts-ignore
    const file: File = event.target.files[0];
    this.formData.set('image', file, file.name);
    this.userService.setUserProfileImage(this.formData).subscribe();
    this.getCurrentUser();
  }

}
