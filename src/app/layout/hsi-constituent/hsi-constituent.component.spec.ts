import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsiConstituentComponent } from './hsi-constituent.component';

describe('HsiConstituentComponent', () => {
  let component: HsiConstituentComponent;
  let fixture: ComponentFixture<HsiConstituentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsiConstituentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsiConstituentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
