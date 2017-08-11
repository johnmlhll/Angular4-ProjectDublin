import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitytriviaComponent } from './citytrivia.component';

describe('CitytriviaComponent', () => {
  let component: CitytriviaComponent;
  let fixture: ComponentFixture<CitytriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitytriviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitytriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
