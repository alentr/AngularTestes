import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifNgforNgswitchComponent } from './ngif-ngfor-ngswitch.component';

describe('NgifNgforNgswitchComponent', () => {
  let component: NgifNgforNgswitchComponent;
  let fixture: ComponentFixture<NgifNgforNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifNgforNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifNgforNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
