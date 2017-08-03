import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldIndexComponent } from './world-index.component';

describe('WorldIndexComponent', () => {
  let component: WorldIndexComponent;
  let fixture: ComponentFixture<WorldIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
