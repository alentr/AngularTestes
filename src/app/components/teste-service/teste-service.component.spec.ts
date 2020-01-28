import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteServiceComponent } from './teste-service.component';

describe('TesteServiceComponent', () => {
  let component: TesteServiceComponent;
  let fixture: ComponentFixture<TesteServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
