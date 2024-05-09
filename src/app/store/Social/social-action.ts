import { createAction, props } from '@ngrx/store';
import { EventModel, FriendsModel } from './social-model';

export const fetchFriendsData = createAction('[Data] Fetch Friends');
export const fetchFriendsSuccess = createAction('[Data] Fetch Friends Success',props<{ Friends: FriendsModel[] }>());
export const fetchFriendsFailure = createAction('[Data] Fetch Friends Failure', props<{ error: string }>());

// Event
export const fetchEventData = createAction('[Data] Fetch Event');
export const fetchEventSuccess = createAction('[Data] Fetch Event Success',props<{ Event: EventModel[] }>());
export const fetchEventFailure = createAction('[Data] Fetch Event Failure',props<{ error: string }>());