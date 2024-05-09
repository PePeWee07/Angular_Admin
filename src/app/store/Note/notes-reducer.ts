import { Action, createReducer, on } from '@ngrx/store';
import { fetchNotesData, fetchNotesFailure, fetchNotesSuccess } from './notes-action';

export interface NotesState {
    notes: any[];
    loading: boolean;
    error: any;
}

export const initialState: NotesState = {
    notes: [],
    loading: false,
    error: null,
};

export const NotesReducer = createReducer(
    initialState,
    on(fetchNotesData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchNotesSuccess, (state, { notes }) => {
        return { ...state, notes, loading: false };
    }),
    on(fetchNotesFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),
);

// Selector
export function reducer(state: NotesState | undefined, action: Action) {
    return NotesReducer(state, action);
}
