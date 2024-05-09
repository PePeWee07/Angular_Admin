import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EcommerceState } from './ecommerce-reducer';

export const selectDataState = createFeatureSelector<EcommerceState>('Ecommerce');

export const selectData = createSelector(
    selectDataState,
    (state: EcommerceState) => state.product
);

export const selectProductGrid = createSelector(
    selectDataState,
    (state: EcommerceState) => state.productgrid
);

// Order
export const selectOrder = createSelector(
    selectDataState,
    (state: EcommerceState) => state.order
);

// seller
export const selectSeller = createSelector(
    selectDataState,
    (state: EcommerceState) => state.seller
);

export const selectDataLoading = createSelector(
    selectDataState,
    (state: EcommerceState) => state.loading
);

export const selectDataError = createSelector(
    selectDataState,
    (state: EcommerceState) => state.error
);

