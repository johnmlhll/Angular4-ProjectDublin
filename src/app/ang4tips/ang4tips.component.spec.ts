import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ang4tipsComponent } from './ang4tips.component';

describe('Ang4tipsComponent', () => {
  let component: Ang4tipsComponent;
  let fixture: ComponentFixture<Ang4tipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ang4tipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ang4tipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
