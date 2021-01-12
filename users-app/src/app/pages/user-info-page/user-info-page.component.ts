import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs';
import {UserFull} from '../../interfaces/UserFull';
import {map} from 'rxjs/operators';
import {UserResponseObject} from '../../interfaces/UserResponse';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.sass']
})
export class UserInfoPageComponent implements OnInit {

  id: number;
  user$ = new Observable<UserFull>();

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
    this.user$ = this.usersService.getUserById(this.id).pipe(
      map((res: UserResponseObject) => res.result)
    );
  }

}
