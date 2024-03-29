import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlistComponent } from './vlist.component';

describe('VlistComponent', () => {
  let component: VlistComponent;
  let fixture: ComponentFixture<VlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
