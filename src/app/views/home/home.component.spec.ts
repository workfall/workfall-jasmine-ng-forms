import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { ApiServiceStub } from 'src/app/services/api.service.stub';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ApiService,
          useClass: ApiServiceStub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search button inactive as long as the form is invalid', () => {
    const searchButton = fixture.debugElement.query(By.css('#search-button')).nativeElement;
    spyOn(component, 'getHotels').and.callThrough();
    searchButton.click();

    expect(component.getHotels).not.toHaveBeenCalled();
    expect(searchButton.disabled).toBeTruthy();
  });

  it('should take user inputs and activate search button after form is valid', fakeAsync(() => {
    // simulate select domain
    const selectDomainDEl = fixture.debugElement.query(By.css('#select-domain'));

    selectDomainDEl.nativeElement.value = selectDomainDEl.nativeElement.options[1].value;
    selectDomainDEl.triggerEventHandler('change', {target: selectDomainDEl.nativeElement});

    fixture.detectChanges()
    // simulate select locale
    const selectLocale = fixture.debugElement.query(By.css('#select-locale'));
    selectLocale.nativeElement.value = selectLocale.nativeElement.options[1].value;
    selectLocale.triggerEventHandler('change', {target: selectLocale.nativeElement});

    fixture.detectChanges()
    // simulate input event
    const searchInput = fixture.debugElement.query(By.css('#search-input'));

    searchInput.nativeElement.value = 'nai';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges()
    tick(2000); // cover for the 2 seconds debounce, remember to enclose this callback in fakeAsync HOF
    fixture.detectChanges();

    // simulate select region
    const selectRegion = fixture.debugElement.query(By.css('#select-region'));
    selectRegion.nativeElement.value = selectRegion.nativeElement.options[1].value;
    selectRegion.triggerEventHandler('change', {target: selectRegion.nativeElement});

    fixture.detectChanges()

    // Simulate checkin date select
    const checkinDateSelect = fixture.debugElement.query(By.css('#select-checkin'));
    checkinDateSelect.nativeElement.value = '01-01-2023';
    checkinDateSelect.triggerEventHandler('dateSelect', {target: checkinDateSelect.nativeElement});
    fixture.detectChanges()

    // Simulate checkout date select
    const checkoutDateSelect = fixture.debugElement.query(By.css('#select-checkout'));
    checkoutDateSelect.nativeElement.value = '07-01-2023';
    checkoutDateSelect.triggerEventHandler('dateSelect', {target: checkoutDateSelect.nativeElement});
    fixture.detectChanges()

    // Trigger a second select domain to cover branch i.e IF statement
    selectDomainDEl.nativeElement.value = selectDomainDEl.nativeElement.options[2].value;
    selectDomainDEl.triggerEventHandler('change', {target: selectDomainDEl.nativeElement});

    fixture.detectChanges()

    // simulate second select locale since it resets
    selectLocale.nativeElement.value = selectLocale.nativeElement.options[1].value;
    selectLocale.triggerEventHandler('change', {target: selectLocale.nativeElement});

    fixture.detectChanges()

    const searchButton = fixture.debugElement.query(By.css('#search-button')).nativeElement;

    // check form validations
    expect(component.searchForm.value.domain).toBeTruthy();
    expect(component.searchForm.value.locale).toBeTruthy();
    expect(component.searchForm.value.search).toBeTruthy();

    expect(searchButton.disabled).toBeFalsy(); // assert that the button is enabled

    spyOn(component, 'getHotels').and.callThrough();
    searchButton.click();

    expect(component.getHotels).toHaveBeenCalled();
  }));
});
