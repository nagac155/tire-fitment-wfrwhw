import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { VehicleActions } from '../actions/vehicle.action';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class RequestVehicleYearEffect {

constructor(
    private actions$: Actions,
    private regionsService: VehicleService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType(VehicleActions.VEHICLE_YEAR_REQUESTED),
    switchMap((action) => this.regionsService.getVehicleYear().pipe(
        map((result: any) => createAction(VehicleActions.VEHICLE_YEAR_REQUEST_SUCCEEDED, result)),
        catchError((error: ErrorEvent) => of(createAction(VehicleActions.VEHICLE_YEAR_REQUEST_FAILED, { error })))),
    )));
}
