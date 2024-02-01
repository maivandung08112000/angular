import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUseComponent } from './edit-use.component';

describe('EditUseComponent', () => {
  let component: EditUseComponent;
  let fixture: ComponentFixture<EditUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
