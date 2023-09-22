import { TestBed } from '@angular/core/testing';

import { AwsApigatewayService } from './aws-apigateway.service';

describe('AwsApigatewayService', () => {
  let service: AwsApigatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsApigatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
