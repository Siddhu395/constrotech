import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureWorksComponent } from './future-works.component';

describe('FutureWorksComponent', () => {
  let component: FutureWorksComponent;
  let fixture: ComponentFixture<FutureWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
