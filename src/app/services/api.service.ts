import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelData, HotelDomainsEnum, RegionData, SearchHotelParams } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL = 'https://hotels-com-provider.p.rapidapi.com/v2/';

  constructor(private http: HttpClient) {}

  searchRegions(query: string, domain: HotelDomainsEnum): Observable<RegionData> {
    return this.http.get<RegionData>(`${this.apiURL}regions`, {
      params: {
        locale: 'en_GB',
        query,
        domain
      }
    });
  }

  searchHotel(params: SearchHotelParams): Observable<HotelData> {
    return this.http.get<HotelData>(`${this.apiURL}hotels/search`, {
      params
    })
  }


}
