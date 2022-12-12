import { Component, Input } from '@angular/core';
import { PropertiesEntity } from 'src/app/models';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input() data!: PropertiesEntity;

  handleViewImage() {}
}
