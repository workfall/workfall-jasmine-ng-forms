import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { HotelCardComponent } from './hotel-card.component';

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCardComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
