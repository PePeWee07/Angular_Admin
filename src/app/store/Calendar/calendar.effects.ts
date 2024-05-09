import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

// Action
import { addCalendar, addCalendarFailure, addCalendarSuccess, addEvent, addEventFailure, addEventSuccess, deleteCalendar, deleteCalendarFailure, deleteCalendarSuccess, fetchCalendar, fetchCalendarFailure, fetchCalendarSuccess, updateCalendar, updateCalendarFailure, updateCalendarSuccess } from './calendar.actions';
import { CrudService } from '../../core/services/crud.service';

@Injectable()
export class CalendarEffects {
    fetchEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchCalendar),
            mergeMap(() =>
                this.CrudService.fetchData('/app/calendar').pipe(
                    map((events) => fetchCalendarSuccess({ events })),
                    catchError((error) =>
                        of(fetchCalendarFailure({ error }))
                    )
                )
            )
        )
    );

    addEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCalendar),
            mergeMap(({ events }) =>
                this.CrudService.addData('/app/calendar', events).pipe(
                    map(() => addCalendarSuccess({ events })),
                    catchError((error) => of(addCalendarFailure({ error })))
                )
            )
        )
    );

    updateEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateCalendar),
            mergeMap(({ events }) =>
                this.CrudService.updateData('/app/calendar', events).pipe(
                    map(() => updateCalendarSuccess({ events })),
                    catchError((error) => of(updateCalendarFailure({ error })))
                )
            )
        )
    );

    deleteEvents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteCalendar),
            mergeMap(({ id }) =>
                this.CrudService.deleteData('/app/calendar').pipe(
                    map(() => deleteCalendarSuccess({ id })),
                    catchError((error) => of(deleteCalendarFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions,
        private CrudService: CrudService) { }
}