import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllClienteComponent } from './show-all-cliente.component';

describe('ShowAllClienteComponent', () => {
  let component: ShowAllClienteComponent;
  let fixture: ComponentFixture<ShowAllClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowAllClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
