import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUseComponent } from './create-use.component';

describe('CreateUseComponent', () => {
  let component: CreateUseComponent;
  let fixture: ComponentFixture<CreateUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
