import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserFull} from '../../interfaces/UserFull';
import {UsersService} from '../../services/users.service';
import {UserResponseArray} from '../../interfaces/UserResponse';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-users-list-page',
  templateUrl: './users-list-page.component.html',
  styleUrls: ['./users-list-page.component.sass']
})
export class UsersListPageComponent implements OnInit {

  public usersList$: Observable<UserFull[]>;
  public pageSize = 1;
  public response$: Observable<UserResponseArray>;

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsersList();
  }

  public getUsersList(pageSize?: number, pageIndex?: number): void {
    this.response$ = (this.usersService.getUsersList(pageSize, pageIndex));
  }

  public filterUsers(val: string): void {
    this.response$ = this.usersService.searchUsers(val);
  }

  public aboutUserInfo(data: UserFull): void {
    this.router.navigateByUrl(`user-info/${data.id}`);
  }

  public pageChange(event: PageEvent): void {
    this.getUsersList(event.pageSize, event.pageIndex + 1);
  }
}
