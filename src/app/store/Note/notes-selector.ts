import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from './notes-reducer';

export const selectDataState = createFeatureSelector<NotesState>('Notes');

export const selectNotes = createSelector(
    selectDataState,
    (state: NotesState) => state.notes
);

export const selectNoteLoading = createSelector(
    selectDataState,
    (state: NotesState) => state.loading
);

export const selectNoteError = createSelector(
    selectDataState,
    (state: NotesState) => state.error
);

