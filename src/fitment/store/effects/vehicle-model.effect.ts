import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class RequestVehicleModelEffect {

constructor(
    private actions$: Actions,
    private VehicleService: VehicleService,
) { }

@Effect()
run$: Observable<any> = createEffect(() => this.actions$.pipe(ofType('[Fitment] Load Models'),
    switchMap((action: any) => this.VehicleService.getVehicleModels(action.payload).pipe(
        map((result: any) => ({type: '[Fitment] Load Models Success', payload: result.model})),
        catchError((error: ErrorEvent) => of({type: '[Fitment] Load Models Fail', payload: error }))),
    )));
}
