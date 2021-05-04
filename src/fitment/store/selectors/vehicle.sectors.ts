import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Injectable()
export class VehicleSelectors {

    constructor(private store: Store<any>) { }

    getVehicleYears(): Observable<Array<any>> {
        return this.store.select(state => state.fitment.years);
    }

    getVehicleMakes(): Observable<Array<any>> {
        return this.store.select(state => state.fitment.makes);
    }

    getVehicleModels(): Observable<Array<any>> {
        return this.store.select(state => state.fitment.models);
    }

    getVehicleTrim(): Observable<Array<any>> {
        return this.store.select(state => state.fitment.trims);
    }
}


