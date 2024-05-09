import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-reducer';

export const selectDataState = createFeatureSelector<UserState>('User');

export const selectUserList = createSelector(
    selectDataState,
    (state: UserState) => state.UserList
);

export const selectUserGrid = createSelector(
    selectDataState,
    (state: UserState) => state.UserGrid
);

export const selectUserLoading = createSelector(
    selectDataState,
    (state: UserState) => state.loading
);

export const selectUserError = createSelector(
    selectDataState,
    (state: UserState) => state.error
);

