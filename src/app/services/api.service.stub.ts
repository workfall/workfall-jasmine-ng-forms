import { of } from "rxjs";
import { MOCK_DATA } from "./api.service.mock-data";

export class ApiServiceStub {
  getDomains() {
    return of(MOCK_DATA.domains);
  }

  searchRegions() {
    return of(MOCK_DATA.regions);
  }

  searchHotel() {
    return of(MOCK_DATA.hotels);
  }
}
