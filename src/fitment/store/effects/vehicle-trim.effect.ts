import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class RequestVehicleTrimEffect {

constructor(
    private actions$: Actions,
    private VehicleService: VehicleService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType('[Fitment] Load Trim'),
    switchMap((action: any) => this.VehicleService.getVehicleTrim(action.payload).pipe(
        map((result: any) => ({type: '[Fitment] Load Trim Success', payload: result.trim})),
        catchError((error: ErrorEvent) => of({type: '[Fitment] Load Trim Fail', payload: error }))),
    )));
}
