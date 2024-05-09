import { createAction, props } from '@ngrx/store';
import { GridModel, ListModel } from './user-model';

export const fetchUserListData = createAction('[Data] Fetch UserList');
export const fetchUserListSuccess = createAction('[Data] Fetch UserList Success',props<{ UserList: ListModel[] }>());
export const fetchUserListFailure = createAction('[Data] Fetch UserList Failure', props<{ error: string }>());

// UserGrid
export const fetchUserGridData = createAction('[Data] Fetch UserGrid');
export const fetchUserGridSuccess = createAction('[Data] Fetch UserGrid Success',props<{ UserGrid: GridModel[] }>());
export const fetchUserGridFailure = createAction('[Data] Fetch UserGrid Failure',props<{ error: string }>());