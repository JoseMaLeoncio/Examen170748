import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotasComponent } from './listnotas.component';

describe('ListnotasComponent', () => {
  let component: ListnotasComponent;
  let fixture: ComponentFixture<ListnotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
