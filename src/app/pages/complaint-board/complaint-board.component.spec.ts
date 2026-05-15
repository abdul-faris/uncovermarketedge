import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintBoardComponent } from './complaint-board.component';

describe('ComplaintBoardComponent', () => {
  let component: ComplaintBoardComponent;
  let fixture: ComponentFixture<ComplaintBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
