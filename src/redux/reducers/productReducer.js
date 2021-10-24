import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: {},
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, isLoading: true };

    case ActionTypes.SET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isLoading: false };

    case ActionTypes.SET_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case ActionTypes.SET_SELECTED_PRODUCT:
      return { ...state, isLoading: true };

    case ActionTypes.SET_SELECTED_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, selectedProduct: action.payload };

    case ActionTypes.SET_SELECTED_PRODUCT_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: {} };

    default:
      return state;
  }
};
