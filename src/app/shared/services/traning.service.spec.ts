/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TraningService } from './traning.service';

describe('Service: Traning', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraningService]
    });
  });

  it('should ...', inject([TraningService], (service: TraningService) => {
    expect(service).toBeTruthy();
  }));
});
