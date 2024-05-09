import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SocialState } from './social-reducer';

export const selectDataState = createFeatureSelector<SocialState>('Social');

export const selectFriends = createSelector(
    selectDataState,
    (state: SocialState) => state.Friends
);

export const selectEvent = createSelector(
    selectDataState,
    (state: SocialState) => state.Event
);

export const selectSocialLoading = createSelector(
    selectDataState,
    (state: SocialState) => state.loading
);

export const selectSocialError = createSelector(
    selectDataState,
    (state: SocialState) => state.error
);

