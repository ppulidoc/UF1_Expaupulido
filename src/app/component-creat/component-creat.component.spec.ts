import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCreatComponent } from './component-creat.component';

describe('ComponentCreatComponent', () => {
  let component: ComponentCreatComponent;
  let fixture: ComponentFixture<ComponentCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCreatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
