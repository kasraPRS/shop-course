import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsaComponent } from './parsa.component';

describe('ParsaComponent', () => {
  let component: ParsaComponent;
  let fixture: ComponentFixture<ParsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
