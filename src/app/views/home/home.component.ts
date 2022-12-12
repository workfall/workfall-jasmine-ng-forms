import { Component, OnInit } from '@angular/core';
import { HotelData, HotelDomainsEnum } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // hotels: HotelData[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.searchRegion();
    this.getHotels();
  }

  getHotels() {
    this.apiService.searchHotel({
      domain: 'AE',
      sort_order: 'REVIEW',
      locale: 'en_GB',
      checkout_date: '2023-09-27',
      region_id: '2872',
      adults_number: '1',
      checkin_date: '2023-09-26',
      available_filter: 'SHOW_AVAILABLE_ONLY',
      meal_plan: 'FREE_BREAKFAST',
      guest_rating_min: '8',
      price_min: '10',
      page_number: '1',
      children_ages: '4,0,15',
      amenities: 'WIFI,PARKING',
      price_max: '500',
      lodging_type: 'HOTEL,HOSTEL,APART_HOTEL',
      payment_type: 'PAY_LATER,FREE_CANCELLATION',
      star_rating_ids: '3,4,5'
    }).subscribe(res => {
      console.log('res', res);

    })
  }

  searchRegion(query: string = 'Pra', domain: HotelDomainsEnum = HotelDomainsEnum.AE) {
    this.apiService.searchRegions(query, domain).subscribe(res => {
      console.log('res', res);

    });
  }

}
