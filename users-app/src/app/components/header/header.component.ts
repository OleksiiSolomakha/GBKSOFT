import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, pluck} from 'rxjs/operators';
import {fromEvent} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('search') searchInput: ElementRef;
  @Output() searchValue: EventEmitter<any> = new EventEmitter<any>();

  constructor(private usersService: UsersService, private router: Router) { }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        pluck('target', 'value'),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(res => this.searchValue.emit(res));
  }

  public logout(): void {
    this.usersService.logoutCurrentUser().subscribe();
    this.router.navigateByUrl('/login');
  }
}
