import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { VehicleSelectors } from "../store/selectors/vehicle.sectors";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit, OnDestroy {
  years$ = this.vehicleSelectors.getVehicleYears();
  makes$ = this.vehicleSelectors.getVehicleMakes();
  models$ = this.vehicleSelectors.getVehicleModels();
  trim$ = this.vehicleSelectors.getVehicleTrim();

  selectedYear;
  selectedMake = "Acura";
  selectedModel = "RDX"

  // import the store into the constructor
  constructor(
    public vehicleSelectors: VehicleSelectors,
    private store: Store<any>
  ) {
  }
  ngOnInit() {
    //No API calls are needed on component initaialization.
  }

  ngOnDestroy() {
    //async pipe handles unsubscribes automatically, when the component is destroyed.
  }

  requestYears() {
    this.store.dispatch({type: '[Fitment] Load Years'});
  }

  requestMakes(year: string) {
    this.selectedYear = year;
    this.store.dispatch({type: '[Fitment] Load Makes', payload: {year: this.selectedYear}})
  }

  requestModels(make: string) {
    this.selectedMake = make;
    this.store.dispatch({type: '[Fitment] Load Models', payload: {year: this.selectedYear, make: this.selectedMake}})
  }

  requestTrims(model: string) {
    this.selectedModel = model;
    this.store.dispatch({type: '[Fitment] Load Trim', payload: {year: this.selectedYear, make: this.selectedMake, model: this.selectedModel}})
  }
}
