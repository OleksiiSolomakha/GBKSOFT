import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMapPageComponent } from './users-map-page.component';

describe('UsersMapPageComponent', () => {
  let component: UsersMapPageComponent;
  let fixture: ComponentFixture<UsersMapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
