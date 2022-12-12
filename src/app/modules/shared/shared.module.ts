import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HotelCardComponent } from '../../components/hotel-card/hotel-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS_TO_EXPORT = [
  NavBarComponent,
  HotelCardComponent
];

const MODULES_TO_EXPORT = [
  ReactiveFormsModule,
  FormsModule,
  NgbModule,
  RouterModule,
  HttpClientModule,
  FontAwesomeModule
];



@NgModule({
  declarations: [
    ...COMPONENTS_TO_EXPORT,
  ],
  imports: [
    CommonModule,
    ...MODULES_TO_EXPORT
  ],
  exports: [
    ...COMPONENTS_TO_EXPORT,
    ...MODULES_TO_EXPORT
  ]
})
export class SharedModule { }
