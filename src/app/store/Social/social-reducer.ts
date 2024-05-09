import { Action, createReducer, on } from '@ngrx/store';
import { fetchEventData, fetchEventFailure, fetchEventSuccess, fetchFriendsData, fetchFriendsFailure, fetchFriendsSuccess } from './social-action';

export interface SocialState {
    Friends: any[];
    Event: any[];
    loading: boolean;
    error: any;
}

export const initialState: SocialState = {
    Friends: [],
    Event: [],
    loading: false,
    error: null,
};

export const SocialReducer = createReducer(
    initialState,
    on(fetchFriendsData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchFriendsSuccess, (state, { Friends }) => {
        return { ...state, Friends, loading: false };
    }),
    on(fetchFriendsFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),

    // Event
    on(fetchEventData, (state) => {
        return { ...state, loading: true, error: null };
    }),
    on(fetchEventSuccess, (state, { Event }) => {
        return { ...state, Event, loading: false };
    }),
    on(fetchEventFailure, (state, { error }) => {
        return { ...state, error, loading: false };
    }),
);

// Selector
export function reducer(state: SocialState | undefined, action: Action) {
    return SocialReducer(state, action);
}
