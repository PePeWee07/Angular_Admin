import { createAction, props } from '@ngrx/store';
import { orderModel, productModel, sellerModel } from './ecommerce.model';

export const fetchproductListData = createAction('[Data] Fetch productList');
export const fetchproductListSuccess = createAction('[Data] Fetch productList Success',props<{ product: productModel[] }>());
export const fetchproductListFailure = createAction('[Data] Fetch productList Failure',props<{ error: string }>());

export const fetchproductGridData = createAction('[Data] Fetch productGrid');
export const fetchproductGridSuccess = createAction('[Data] Fetch productGrid Success',props<{ productgrid: productModel[] }>());
export const fetchproductGridFailure = createAction('[Data] Fetch productGrid Failure',props<{ error: string }>());

export const fetchorderData = createAction('[Data] Fetch order');
export const fetchorderSuccess = createAction('[Data] Fetch order Success',props<{ order: orderModel[] }>());
export const fetchorderFailure = createAction('[Data] Fetch order Failure', props<{ error: string }>());

// seller
export const fetchsellerData = createAction('[Data] Fetch seller');
export const fetchsellerSuccess = createAction('[Data] Fetch seller Success',props<{ seller: sellerModel[] }>());
export const fetchsellerFailure = createAction('[Data] Fetch seller Failure', props<{ error: string }>());
