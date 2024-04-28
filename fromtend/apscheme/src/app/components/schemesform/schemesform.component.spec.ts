import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesformComponent } from './schemesform.component';

describe('SchemesformComponent', () => {
  let component: SchemesformComponent;
  let fixture: ComponentFixture<SchemesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
