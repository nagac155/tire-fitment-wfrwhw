import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class RequestVehicleYearEffect {

constructor(
    private actions$: Actions,
    private VehicleService: VehicleService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType('[Fitment] Load Years'),
    switchMap((action) => this.VehicleService.getVehicleYears().pipe(
        map((result: any) => ({type: '[Fitment] Load Years Success', payload: result.year})),
        catchError((error: ErrorEvent) => of({type: '[Fitment] Load Years Fail', payload: error }))),
    )));
}
