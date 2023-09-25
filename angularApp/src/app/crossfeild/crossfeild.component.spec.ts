import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfeildComponent } from './crossfeild.component';

describe('CrossfeildComponent', () => {
  let component: CrossfeildComponent;
  let fixture: ComponentFixture<CrossfeildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossfeildComponent]
    });
    fixture = TestBed.createComponent(CrossfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
