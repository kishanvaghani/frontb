import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityListComponent } from './properity-list.component';

describe('ProperityListComponent', () => {
  let component: ProperityListComponent;
  let fixture: ComponentFixture<ProperityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
