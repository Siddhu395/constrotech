import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstConsultantComponent } from './const-consultant.component';

describe('ConstConsultantComponent', () => {
  let component: ConstConsultantComponent;
  let fixture: ComponentFixture<ConstConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
