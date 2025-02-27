import { TestBed } from '@angular/core/testing';

import { SectionThemeService } from './section-theme.service';

describe('SectionThemeService', () => {
  let service: SectionThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
