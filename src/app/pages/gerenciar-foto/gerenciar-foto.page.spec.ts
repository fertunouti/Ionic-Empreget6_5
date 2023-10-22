import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarFotoPage } from './gerenciar-foto.page';

describe('GerenciarFotoPage', () => {
  let component: GerenciarFotoPage;
  let fixture: ComponentFixture<GerenciarFotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenciarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
