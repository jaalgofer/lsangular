import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPassAdminComponent } from './cambiar-pass-admin.component';

describe('CambiarPassAdminComponent', () => {
  let component: CambiarPassAdminComponent;
  let fixture: ComponentFixture<CambiarPassAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarPassAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarPassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
