import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortComponent } from './resort.component';

describe('ResortComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResortComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ResortComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'google-maps'`, () => {
    const fixture = TestBed.createComponent(ResortComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('google-maps');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ResortComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('google-maps app is running!');
  });
});
