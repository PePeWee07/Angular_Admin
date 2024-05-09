import { Action, createReducer, on } from '@ngrx/store';
import { fetchUserGridData, fetchUserGridFailure, fetchUserGridSuccess, fetchUserListData, fetchUserListFailure, fetchUserListSuccess } from './user-action';

export interface UserState {
    UserList: any[];
    UserGrid: any[];
    loading: boolean;
    error: any;
}

export const initialState: UserState = {
    UserList: [],
    UserGrid: [],
    loading: false,
    error: null,
};

export const UserReducer = createReducer(
    initialState,
    on(fetchUserListData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchUserListSuccess, (state, { UserList }) => {
        return { ...state, UserList, loading: false };
    }),
    on(fetchUserListFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),

    // UserGrid
    on(fetchUserGridData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchUserGridSuccess, (state, { UserGrid }) => {
        return { ...state, UserGrid, loading: false };
    }),
    on(fetchUserGridFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),
);

// Selector
export function reducer(state: UserState | undefined, action: Action) {
    return UserReducer(state, action);
}
