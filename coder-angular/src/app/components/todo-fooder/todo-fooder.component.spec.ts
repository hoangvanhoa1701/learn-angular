import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFooderComponent } from './todo-fooder.component';

describe('TodoFooderComponent', () => {
  let component: TodoFooderComponent;
  let fixture: ComponentFixture<TodoFooderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFooderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFooderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
