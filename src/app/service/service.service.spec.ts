import { TestBed } from '@angular/core/testing';

import { ServiceVeiculo } from './service.veiculo';

describe('ServiceService', () => {
  let service: ServiceVeiculo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVeiculo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
