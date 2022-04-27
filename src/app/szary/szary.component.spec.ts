import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzaryComponent } from './szary.component';

describe('SzaryComponent', () => {
  let component: SzaryComponent;
  let fixture: ComponentFixture<SzaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
