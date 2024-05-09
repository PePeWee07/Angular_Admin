import { Injectable } from "@angular/core";

import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { CrudService } from "../../core/services/crud.service";
import { fetchNotesData, fetchNotesFailure, fetchNotesSuccess } from "./notes-action";


@Injectable()
export class NotesEffects {
    fetchNotes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchNotesData),
            mergeMap(() =>
                this.CrudService.fetchData('/app/notes').pipe(
                    map((notes) => fetchNotesSuccess({ notes })),
                    catchError((error) =>
                        of(fetchNotesFailure({ error }))
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
