import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CrudService } from "../../core/services/crud.service";
import { fetchUserGridData, fetchUserGridFailure, fetchUserGridSuccess, fetchUserListData, fetchUserListFailure, fetchUserListSuccess } from "./user-action";


@Injectable()
export class UserEffects {
    fetchList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchUserListData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/userlist').pipe(
                    map((UserList) => fetchUserListSuccess({ UserList })),
                    catchError((error) =>
                        of(fetchUserListFailure({ error }))
                    )
                )
            ),
        ),
    )

    // User Grid
    fetchGrid$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchUserGridData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/usergrid').pipe(
                map((UserGrid) => fetchUserGridSuccess({ UserGrid })),
                catchError((error) =>
                    of(fetchUserGridFailure({ error }))
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
