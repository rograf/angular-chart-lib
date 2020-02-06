import { TestBed } from '@angular/core/testing';

import { NgcChartsService } from './ngc-charts.service';

describe('NgcChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgcChartsService = TestBed.get(NgcChartsService);
    expect(service).toBeTruthy();
  });
});
