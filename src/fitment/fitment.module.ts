import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";


import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { VehicleAction } from "./store/actions/vehicle.action";
import { VehicleService } from "./store/services/vehicle.service";
import { VehicleSelectors } from "./store/selectors/vehicle.sectors";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { RequestVehicleYearEffect } from "./store/effects/vehicle-year.effect";
import { reducer } from "./store/reducers/vehicle.reducer";
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { RequestVehicleMakeEffect } from "./store/effects/vehicle-make.effect";
import { RequestVehicleModelEffect } from "./store/effects/vehicle-model.effect";
import { RequestVehicleTrimEffect } from "./store/effects/vehicle-trim.effect";


export function logger(reducer): any {
  return storeLogger({
    collapsed: true,
    duration: false,
    timestamp: false,
  })(reducer);
}
const metaReducers = [storeFreeze, logger];

@NgModule({
  imports: [CommonModule, 
            StoreModule.forFeature('fitment', reducer),
            HttpClientModule,
            EffectsModule.forFeature([RequestVehicleYearEffect, RequestVehicleMakeEffect, RequestVehicleModelEffect, RequestVehicleTrimEffect])],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
  providers: [ VehicleService, VehicleSelectors]
})
export class FitmentModule {}
