import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPageComponent } from './settings-page.component';

describe('SettingPageComponent', () => {
  let component: SettingPageComponent;
  let fixture: ComponentFixture<SettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
