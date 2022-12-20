import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SearchHotelParams } from '../models';

import { ApiService } from './api.service';
import { MOCK_DATA } from './api.service.mock-data';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get domains', (done) => {
    service = TestBed.inject(ApiService);

    service.getDomains().subscribe(res => {
      expect(res).toEqual(MOCK_DATA.domains);
      done();
    });

    const testRequest = httpTestingController.expectOne('https://hotels-com-provider.p.rapidapi.com/v2/domains');

    testRequest.flush(MOCK_DATA.domains);
  });

  it('should get regions using query params', (done) => {
    service = TestBed.inject(ApiService);
    const query = 'nai';
    const domain = 'AE';
    const locale = 'en_GB';

    service.searchRegions(query, domain, locale).subscribe(res => {
      expect(res).toEqual(MOCK_DATA.regions);
      done();
    });

    const testRequest = httpTestingController.expectOne(`https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=${locale}&query=${query}&domain=${domain}`);

    testRequest.flush(MOCK_DATA.regions);
  });

  it('should get hotels using query params', (done) => {
    service = TestBed.inject(ApiService);
    const params: SearchHotelParams = {
      domain: 'AE',
      sort_order: 'REVIEW',
      locale: 'en_GB',
      checkout_date: '2022-12-26',
      region_id: '2523',
      adults_number: '1',
      checkin_date: '2022-12-22',
    };

    service.searchHotel(params).subscribe(res => {
      expect(res).toEqual(MOCK_DATA.hotels);
      done();
    });

    const testRequest = httpTestingController.expectOne(`https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=${params.domain}&sort_order=${params.sort_order}&locale=${params.locale}&checkout_date=${params.checkout_date}&region_id=${params.region_id}&adults_number=${params.adults_number}&checkin_date=${params.checkin_date}`);

    testRequest.flush(MOCK_DATA.hotels);
  });
});
