import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGroupComponent } from './server-group.component';

describe('ServerGroupComponent', () => {
  let component: ServerGroupComponent;
  let fixture: ComponentFixture<ServerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
