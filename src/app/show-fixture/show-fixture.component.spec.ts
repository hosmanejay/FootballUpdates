import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFixtureComponent } from './show-fixture.component';

describe('ShowFixtureComponent', () => {
  let component: ShowFixtureComponent;
  let fixture: ComponentFixture<ShowFixtureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFixtureComponent]
    });
    fixture = TestBed.createComponent(ShowFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
