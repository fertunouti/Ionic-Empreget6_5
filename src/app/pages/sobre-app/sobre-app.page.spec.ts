import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreAppPage } from './sobre-app.page';

describe('SobreAppPage', () => {
  let component: SobreAppPage;
  let fixture: ComponentFixture<SobreAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SobreAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
