import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaPrestadorPage } from './pesquisa-prestador.page';

describe('PesquisaPrestadorPage', () => {
  let component: PesquisaPrestadorPage;
  let fixture: ComponentFixture<PesquisaPrestadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesquisaPrestadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
