import { createAction, props } from '@ngrx/store';

export const changelayout = createAction('[Layout] Set Layout', props<{ layout: string }>());
export const changeSkin = createAction('[Layout] Set Skin', props<{ skin: string }>());
export const changeMode = createAction('[Layout] Set Mode', props<{ mode: string }>());
export const changeDirection = createAction('[Layout] Set Direction', props<{ dir: string }>());
export const changewidthLayout = createAction('[Layout] Set width', props<{ width: string }>());
export const changesidebarsize = createAction('[Layout] Set Size', props<{ size: string }>());
export const changenavigation = createAction('[Layout] Set Navigation', props<{ navigation: string }>());
export const changesidebarcolor = createAction('[Layout] Set Sidebar', props<{ sidebar: string }>());
export const changetopbarcolor = createAction('[Layout] Set Topbar', props<{ topbar: string }>())