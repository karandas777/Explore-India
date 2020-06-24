import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarticlesComponent } from './allarticles.component';

describe('AllarticlesComponent', () => {
  let component: AllarticlesComponent;
  let fixture: ComponentFixture<AllarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
