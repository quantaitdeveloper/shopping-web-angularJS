import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNavigationComponent } from './container-navigation.component';

describe('ContainerNavigationComponent', () => {
  let component: ContainerNavigationComponent;
  let fixture: ComponentFixture<ContainerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
