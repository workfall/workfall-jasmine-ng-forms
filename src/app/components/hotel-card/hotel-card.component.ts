import { Component, Input } from '@angular/core';
import { HotelData } from 'src/app/models';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() data!: HotelData;

  handleViewImage() {}
}
