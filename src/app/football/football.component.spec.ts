import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballComponent } from './football.component';

describe('FootballComponent', () => {
  let component: FootballComponent;
  let fixture: ComponentFixture<FootballComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballComponent]
    });
    fixture = TestBed.createComponent(FootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
