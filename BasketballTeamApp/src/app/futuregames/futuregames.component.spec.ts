import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturegamesComponent } from './futuregames.component';

describe('FuturegamesComponent', () => {
  let component: FuturegamesComponent;
  let fixture: ComponentFixture<FuturegamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturegamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
