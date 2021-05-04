import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class RequestVehicleMakeEffect {

constructor(
    private actions$: Actions,
    private VehicleService: VehicleService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType('[Fitment] Load Makes'),
    switchMap((action: any) => this.VehicleService.getVehicleMakes(action.payload).pipe(
        map((result: any) => ({type: '[Fitment] Load Makes Success', payload: result.make})),
        catchError((error: ErrorEvent) => of({type: '[Fitment] Load Makes Fail', payload: error }))),
    )));
}
