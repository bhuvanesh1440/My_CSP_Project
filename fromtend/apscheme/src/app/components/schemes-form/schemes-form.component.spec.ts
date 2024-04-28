import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesFormComponent } from './schemes-form.component';

describe('SchemesFormComponent', () => {
  let component: SchemesFormComponent;
  let fixture: ComponentFixture<SchemesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
