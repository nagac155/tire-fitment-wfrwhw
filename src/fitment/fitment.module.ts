import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { VehicleActions } from "./store/actions/vehicle.action";
import { VehicleService } from "./store/services/vehicle.service";

@NgModule({
  imports: [CommonModule, StoreModule.forFeature("fitment", reducers)],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent],
  providers: [VehicleActions, VehicleService]
})
export class FitmentModule {}
