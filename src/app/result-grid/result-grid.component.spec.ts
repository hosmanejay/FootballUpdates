import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGridComponent } from './result-grid.component';

describe('ResultGridComponent', () => {
  let component: ResultGridComponent;
  let fixture: ComponentFixture<ResultGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultGridComponent]
    });
    fixture = TestBed.createComponent(ResultGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
