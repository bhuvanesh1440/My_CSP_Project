import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeaddComponent } from './schemeadd.component';

describe('SchemeaddComponent', () => {
  let component: SchemeaddComponent;
  let fixture: ComponentFixture<SchemeaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
