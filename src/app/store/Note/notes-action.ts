import { createAction, props } from '@ngrx/store';
import { NoteModel } from './notes-model';

export const fetchNotesData = createAction('[Data] Fetch Notes');
export const fetchNotesSuccess = createAction('[Data] Fetch Notes Success',props<{ notes: NoteModel[] }>());
export const fetchNotesFailure = createAction('[Data] Fetch Notes Failure',props<{ error: string }>());