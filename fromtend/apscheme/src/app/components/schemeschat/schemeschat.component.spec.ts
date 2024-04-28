import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeschatComponent } from './schemeschat.component';

describe('SchemeschatComponent', () => {
  let component: SchemeschatComponent;
  let fixture: ComponentFixture<SchemeschatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeschatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeschatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
