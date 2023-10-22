import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliacaoPage } from './avaliacao.page';

describe('AvaliacaoPage', () => {
  let component: AvaliacaoPage;
  let fixture: ComponentFixture<AvaliacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvaliacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
