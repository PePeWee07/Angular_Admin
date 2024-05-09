import { Action, createReducer, on } from '@ngrx/store';
import { LAYOUT_MODE_TYPES, LAYOUT_WIDTH_TYPES, LAYOUT_TYPES, LEFT_SIDEBAR_SIZE, SKIN_LAYOUT_TYPES, NAVIGATION_TYPES, SIDEBAR_COLOR_TYPES, TOPBAR_COLOR_TYPES, LAYOUT_DIRECTION } from '../../layout';
import { changelayout,  changeSkin, changeMode,changewidthLayout,changesidebarsize,changenavigation, changesidebarcolor, changetopbarcolor, changeDirection } from './layout-action';

export interface LayoutState {
    LAYOUT: string;
    LAYOUT_SKIN: string;
    LAYOUT_MODE: string;
    LAYOUT_DIRECTION: string;
    LAYOUT_WIDTH: string;
    SIDEBAR_SIZE: string;
    LAYOUT_NAVIGATION: string;
    SIDEBAR_COLOR: string,
    TOPBAR_COLOR: string;
}

// IntialState
export const initialState: LayoutState = {
    LAYOUT: LAYOUT_TYPES.VERTICAL,
    LAYOUT_SKIN: SKIN_LAYOUT_TYPES.DEFAULT,
    LAYOUT_MODE: LAYOUT_MODE_TYPES.LIGHTMODE,
    LAYOUT_DIRECTION: LAYOUT_DIRECTION.LTR,
    LAYOUT_WIDTH: LAYOUT_WIDTH_TYPES.FLUID,
    SIDEBAR_SIZE: LEFT_SIDEBAR_SIZE.DEFAULT,
    LAYOUT_NAVIGATION: NAVIGATION_TYPES.STICKY,
    SIDEBAR_COLOR: SIDEBAR_COLOR_TYPES.LIGHT,
    TOPBAR_COLOR: TOPBAR_COLOR_TYPES.LIGHT
}

// Reducer
export const layoutReducer = createReducer(
    initialState,
    on(changelayout, (state, action) => ({ ...state, LAYOUT: action.layout })),
    on(changeSkin, (state, action) => ({ ...state, LAYOUT_SKIN: action.skin })),
    on(changeMode, (state, action) => ({ ...state, LAYOUT_MODE: action.mode })),
    on(changeDirection, (state, action) => ({ ...state, LAYOUT_DIRECTION: action.dir })),
    on(changewidthLayout, (state, action) => ({ ...state, LAYOUT_WIDTH: action.width })),
    on(changesidebarsize, (state, action) => ({ ...state, SIDEBAR_SIZE: action.size })),
    on(changenavigation, (state, action) => ({ ...state, LAYOUT_NAVIGATION: action.navigation })),
    on(changesidebarcolor, (state, action) => ({ ...state, SIDEBAR_COLOR: action.sidebar })),
    on(changetopbarcolor, (state, action) => ({ ...state, TOPBAR_COLOR: action.topbar }))
);

// Selector
export function reducer(state: LayoutState | undefined, action: Action) {
    return layoutReducer(state, action);
}