import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglBlogComponent } from './singl-blog.component';

describe('SinglBlogComponent', () => {
  let component: SinglBlogComponent;
  let fixture: ComponentFixture<SinglBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
