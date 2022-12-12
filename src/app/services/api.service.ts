import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainData, HotelData, RegionData, SearchHotelParams } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL = 'https://hotels-com-provider.p.rapidapi.com/v2/';

  constructor(private http: HttpClient) {}

  searchRegions(query: string, domain: string, locale: string): Observable<RegionData> {
    return this.http.get<RegionData>(`${this.apiURL}regions`, {
      params: {
        locale,
        query,
        domain
      }
    });
  }

  searchHotel(params: SearchHotelParams): Observable<HotelData> {
    return this.http.get<HotelData>(`${this.apiURL}hotels/search`, {
      params
    });
  }

  getDomains(): Observable<DomainData> {
    return this.http.get<DomainData>(`${this.apiURL}domains`);
  }


}
