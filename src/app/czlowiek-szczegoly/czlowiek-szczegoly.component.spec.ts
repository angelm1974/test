import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzlowiekSzczegolyComponent } from './czlowiek-szczegoly.component';

describe('CzlowiekSzczegolyComponent', () => {
  let component: CzlowiekSzczegolyComponent;
  let fixture: ComponentFixture<CzlowiekSzczegolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzlowiekSzczegolyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzlowiekSzczegolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
