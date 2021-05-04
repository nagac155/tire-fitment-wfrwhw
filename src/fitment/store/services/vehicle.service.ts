import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleYears() {
    return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/years");
  }

  getVehicleMakes(payload) {
    const params = new HttpParams().set('year', payload.year);
    return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/makes");
    // return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/makes", {params});
  }

  getVehicleModels(payload) {
    const params = new HttpParams().set('year', payload.loadyear).set('make', payload.make);
    return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/models");
    // return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/models", {params});
  }

  getVehicleTrim(payload) {
    const params = new HttpParams().set('year', payload.year).set('make', payload.make).set('model', payload.model);
    return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/trim");
    // return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/trim", {params});
  }

}
