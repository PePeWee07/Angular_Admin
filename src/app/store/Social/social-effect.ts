import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CrudService } from "../../core/services/crud.service";
import { fetchEventData, fetchEventFailure, fetchEventSuccess, fetchFriendsData, fetchFriendsFailure, fetchFriendsSuccess } from "./social-action";


@Injectable()
export class SocialEffects {
    fetchFriends$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchFriendsData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/friends').pipe(
                    map((Friends) => fetchFriendsSuccess({ Friends })),
                    catchError((error) =>
                        of(fetchFriendsFailure({ error }))
                    )
                )
            ),
        ),
    )

    // Event
    fetchEvent$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fetchEventData),
        mergeMap(() =>
            this.CrudService.fetchData('/app/event').pipe(
                map((Event) => fetchEventSuccess({ Event })),
                catchError((error) =>
                    of(fetchEventFailure({ error }))
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
