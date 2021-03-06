import { Action } from '@ngrx/store';
// import model/interface from db.json here...

// Action constants
export const LOAD_YEARS = '[Fitment] Load Years';
export const LOAD_YEARS_FAIL = '[Fitment] Load Years Fail';
export const LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success';

export const LOAD_MAKES = '[Fitment] Load Makes';
export const LOAD_MAKES_FAIL = '[Fitment] Load Makes Fail';
export const LOAD_MAKES_SUCCESS = '[Fitment] Load Makes Success';

export const LOAD_MODELS = '[Fitment] Load Models';
export const LOAD_MODELS_FAIL = '[Fitment] Load Models Fail';
export const LOAD_MODELS_SUCCESS = '[Fitment] Load Models Success';

export const LOAD_TRIM = '[Fitment] Load Trim';
export const LOAD_TRIM_FAIL = '[Fitment] Load Trim Fail';
export const LOAD_TRIM_SUCCESS = '[Fitment] Load Trim Success';

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any){};
}
export class LoadYearsSuccess implements Action{
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: string[]){};
}


export class LoadMakes implements Action {
  readonly type = LOAD_MAKES;
  constructor(public payload: any){};
}
export class LoadMakesFail implements Action {
  readonly type = LOAD_MAKES_FAIL;
  constructor(public payload: any){};
}
export class LoadMakesSuccess implements Action{
  readonly type = LOAD_MAKES_SUCCESS;
  constructor(public payload: string[]){};
}

export class LoadModels implements Action {
  readonly type = LOAD_MODELS;
}
export class LoadModelsFail implements Action {
  readonly type = LOAD_MODELS_FAIL;
  constructor(public payload: any){};
}
export class LoadModelsSuccess implements Action{
  readonly type = LOAD_MODELS_SUCCESS;
  constructor(public payload: string[]){};
}


export class LoadTrim implements Action {
  readonly type = LOAD_TRIM;
}
export class LoadTrimFail implements Action {
  readonly type = LOAD_TRIM_FAIL;
  constructor(public payload: any){};
}
export class LoadTrimSuccess implements Action{
  readonly type = LOAD_TRIM_SUCCESS;
  constructor(public payload: string[]){};
}


// Action types
export type VehicleAction = LoadYears | LoadYearsFail | LoadYearsSuccess | LoadMakes | LoadMakesFail | LoadMakesSuccess | LoadModels | LoadModelsFail | LoadModelsSuccess | LoadTrim | LoadTrimFail | LoadTrimSuccess;

