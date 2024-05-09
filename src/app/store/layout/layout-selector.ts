import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout-reducers';

export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getLayout = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT
);

export const getLayoutSkin = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT_SKIN
);

export const getLayoutmode = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT_MODE
);

export const getLayoutdirection = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT_DIRECTION
);

export const getLayoutWidth = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT_WIDTH
);

export const getSidebarsize = createSelector(
    getLayoutState,
    (state: LayoutState) => state.SIDEBAR_SIZE
);

export const getNavigation = createSelector(
    getLayoutState,
    (state: LayoutState) => state.LAYOUT_NAVIGATION
);


export const getSidebarcolor = createSelector(
    getLayoutState,
    (state: LayoutState) => state.SIDEBAR_COLOR
);

export const getTopbarcolor = createSelector(
    getLayoutState,
    (state: LayoutState) => state.TOPBAR_COLOR
);
