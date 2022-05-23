import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstServiseComponent } from './reconst-servise.component';

describe('ReconstServiseComponent', () => {
  let component: ReconstServiseComponent;
  let fixture: ComponentFixture<ReconstServiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconstServiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstServiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
