import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteracaoComponenteComponent } from './interacao-componente.component';

describe('InteracaoComponenteComponent', () => {
  let component: InteracaoComponenteComponent;
  let fixture: ComponentFixture<InteracaoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteracaoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteracaoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
