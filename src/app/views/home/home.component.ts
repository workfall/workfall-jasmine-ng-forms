import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, filter, fromEvent, map } from 'rxjs';
import { Domain, DomainData, PropertiesEntity, Region, SupportedLocale } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hotels!: PropertiesEntity[];
  faSearch = faSearch;
  searchForm!: FormGroup;
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  domainData!: DomainData;
  domains!: Domain[];
  regions!: Region[];
  locales!: SupportedLocale[];
  selectedRegion!: string;
  selectedDomain!: string;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', Validators.required],
      domain: ['', Validators.required],
      locale: ['', Validators.required],
      region: ['', Validators.required],
      checkout_date: ['', Validators.required],
      checkin_date: ['', Validators.required]
    });

    this.getDomains();
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
        ,filter(res => res.length > 2 && this.searchForm.value.locale),
        debounceTime(2000),
      )
      .subscribe((result: string) => {
        this.searchForm.patchValue({
          search: result
        });

        this.searchRegion(result, this.searchForm.value.domain, this.searchForm.value.locale);
      });
}

  getHotels() {
    const {domain, locale, region, checkout_date, checkin_date} = this.searchForm.value;

    this.apiService.searchHotel({
      domain,
      sort_order: 'REVIEW',
      locale,
      checkout_date,
      region_id: region,
      adults_number: '1',
      checkin_date,
    }).subscribe(res => {
      this.hotels = res.properties || [];
    })
  }

  searchRegion(query: string, domain: string, locale: string) {
    this.apiService.searchRegions(query, domain, locale).subscribe(res => {
      this.regions = res.data;
    });
  }

  handleDomainChange(e: any) {
    this.searchForm.patchValue({
      locale: ''
    });

    this.locales = Object.values(this.domainData[e.target.value].supported_locales);
    if (this.searchForm.value.search && this.searchForm.value.locale) {
      this.searchRegion(this.searchForm.value.search, this.searchForm.value.domain, this.searchForm.value.locale);
    }
  }

  getDomains() {
    this.apiService.getDomains().subscribe(res => {
      this.domainData = res;
      this.domains = Object.values(this.domainData);
    })
  }

  onDateSelect(e: NgbDate, targetField: string) {
    this.searchForm.patchValue({
      [targetField]: `${e.year + '-' + e.month + '-' + e.day}`
    })
  }

}
