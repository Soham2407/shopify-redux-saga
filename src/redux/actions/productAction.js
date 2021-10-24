import { ActionTypes } from "../constants/actionTypes";

export const setProducts = () => {
  return {
    type: ActionTypes.SET_PRODUCTS,
  };
};

export const setProductsSuccess = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const setProductsFailed = (message) => {
  return {
    type: ActionTypes.SET_PRODUCTS_FAILED,
    payload: message,
  };
};

export const setSelectedProduct = (id) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: id,
  };
};

export const setSelectedProductSuccess = (product) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT_SUCCESS,
    payload: product,
  };
};
export const setSelectedProductFailed = (message) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT_FAILED,
    payload: message,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
