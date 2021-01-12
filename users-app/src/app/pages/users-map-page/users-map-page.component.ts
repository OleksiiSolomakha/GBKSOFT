import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserFull} from '../../interfaces/UserFull';
import {map} from 'rxjs/operators';
import {UserResponseArray} from '../../interfaces/UserResponse';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-users-map-page',
  templateUrl: './users-map-page.component.html',
  styleUrls: ['./users-map-page.component.sass']
})
export class UsersMapPageComponent implements OnInit {

  public usersList$: Observable<UserFull[]>;

  public zoom = 10;
  public lat = 50.3494498937934;
  public lng = 30.956166964913653;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersList$ = this.usersService.getUsersList(50)
      .pipe(
        map((res: UserResponseArray) => res.result)
    ) ;
  }

  public filterUsers(val: string): void {
    this.usersList$ = this.usersService.searchUsers(val)
      .pipe(
        map((res: UserResponseArray) => res.result)
      );
  }

  public aboutUserInfo(data: any): void {
    this.router.navigateByUrl(`user-info/${data.id}`);
  }

}
