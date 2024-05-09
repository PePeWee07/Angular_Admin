import { Action, createReducer, on } from '@ngrx/store';
import { fetchorderData, fetchorderFailure, fetchorderSuccess, fetchproductGridData, fetchproductGridFailure, fetchproductGridSuccess, fetchproductListData, fetchproductListFailure, fetchproductListSuccess, fetchsellerData, fetchsellerFailure, fetchsellerSuccess } from './ecommerce-action';

export interface EcommerceState {
  product: any[];
  productgrid: any[];
  order: any[];
  seller: any[];
  loading: boolean;
  error: any;
}

export const initialState: EcommerceState = {
  product: [],
  productgrid: [],
  order: [],
  seller: [],
  loading: false,
  error: null,
};

export const EcommerceReducer = createReducer(
  initialState,
  on(fetchproductListData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchproductListSuccess, (state, { product }) => {
    return { ...state, product, loading: false };
  }),
  on(fetchproductListFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  on(fetchproductGridData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchproductGridSuccess, (state, { productgrid }) => {
    return { ...state, productgrid, loading: false };
  }),
  on(fetchproductGridFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // Order
  on(fetchorderData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchorderSuccess, (state, { order }) => {
    return { ...state, order, loading: false };
  }),
  on(fetchorderFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),

  // seller
  on(fetchsellerData, (state) => {
    return { ...state, loading: true, error: null };
  }),
  on(fetchsellerSuccess, (state, { seller }) => {
    return { ...state, seller, loading: false };
  }),
  on(fetchsellerFailure, (state, { error }) => {
    return { ...state, error, loading: false };
  }),
);

// Selector
export function reducer(state: EcommerceState | undefined, action: Action) {
  return EcommerceReducer(state, action);
}
