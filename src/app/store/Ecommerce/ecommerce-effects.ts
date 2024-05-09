import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { fetchorderData, fetchorderFailure, fetchorderSuccess, fetchproductGridData, fetchproductGridFailure, fetchproductGridSuccess, fetchproductListData, fetchproductListFailure, fetchproductListSuccess, fetchsellerData, fetchsellerFailure, fetchsellerSuccess } from "./ecommerce-action";
import { CrudService } from "../../core/services/crud.service";


@Injectable()
export class EcommerceEffects {
    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchproductListData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/product').pipe(
                    map((product) => fetchproductListSuccess({ product })),
                    catchError((error) =>
                        of(fetchproductListFailure({ error }))
                    )
                )
            ),
        ),
    )

    fetchGridData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchproductGridData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/productgrid').pipe(
                    map((productgrid) => fetchproductGridSuccess({ productgrid })),
                    catchError((error) =>
                        of(fetchproductGridFailure({ error }))
                    )
                )
            ),
        ),
    )

    // Order
    fetchorderData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchorderData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/order').pipe(
                map((order) => fetchorderSuccess({ order })),
                catchError((error) =>
                    of(fetchorderFailure({ error }))
                )
            )
        ),
        ),
    )
        
    // seller
    fetchsellerData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchsellerData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/seller').pipe(
                map((seller) => fetchsellerSuccess({ seller })),
                catchError((error) =>
                    of(fetchsellerFailure({ error }))
                )
            )
        ),
    ),
)

   

    constructor(
        private actions$: Actions,
        private CrudService: CrudService
    ) { }
}
