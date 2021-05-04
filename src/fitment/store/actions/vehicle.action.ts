// import { Action } from '@ngrx/store';
// // import model/interface from db.json here...

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { createAction } from "../utils/create-action.util";

// // Action constants
// export const LOAD_YEARS = '[Fitment] Load Years';
// export const LOAD_YEARS_FAIL = '[Fitment] Load Years Fail';
// export const LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success';

// // Action creators
// export class LoadYears implements Action {
//   readonly type = LOAD_YEARS;
// }
// export class LoadYearsFail implements Action {
//   readonly type = LOAD_YEARS_FAIL;
//   constructor(public payload: any){};
// }
// export class LoadYearsSuccess implements Action{
//   readonly type = LOAD_YEARS_SUCCESS;
//   constructor(public payload: any){};  // Replace 'any' with interface
// }

// // Action types
// export type VehicleAction = LoadYears | LoadYearsFail | LoadYearsSuccess;

@Injectable()
export class VehicleActions {
  static VEHICLE_YEAR_REQUESTED = "VEHICLE_YEAR_REQUESTED";
  static VEHICLE_YEAR_REQUEST_SUCCEEDED = "VEHICLE_YEAR_REQUEST_SUCCEEDED";
  static VEHICLE_YEAR_REQUEST_FAILED = "VEHICLE_YEAR_REQUEST_FAILED";

  constructor(private store: Store<any>) {}

  requestAsianRegions() {
    this.store.dispatch(createAction(VehicleActions.VEHICLE_YEAR_REQUESTED));
  }
}
