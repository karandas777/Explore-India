import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortarticlesComponent } from './sortarticles.component';

describe('SortarticlesComponent', () => {
  let component: SortarticlesComponent;
  let fixture: ComponentFixture<SortarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
