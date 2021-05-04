import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
// import { IRegion } from '../util/region.interface';

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleYear(): Observable<Array<any>> {
    return this.http.get(
      "https://6080be3273292b0017cdbf2a.mockapi.io/years"
    ) as Observable<Array<any>>;
  }

  getEuropeanReagions() {
    return this.http.get("https://restcountries.eu/rest/v2/region/europe");
  }
}
