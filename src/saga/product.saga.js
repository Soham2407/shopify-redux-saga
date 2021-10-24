import { takeEvery, takeLeading, all, call, put } from "redux-saga/effects";
import { getProduct, getProducts } from "../api";
import {
  setProductsFailed,
  setProductsSuccess,
  setSelectedProductFailed,
  setSelectedProductSuccess,
} from "../redux/actions/productAction";
import { ActionTypes } from "../redux/constants/actionTypes";

function* getProductsSaga() {
  try {
    const data = yield call(getProducts);
    yield put(setProductsSuccess(data));
  } catch (error) {
    yield put(setProductsFailed(error.message));
  }
}

function* getProductSaga(action) {
  try {
    const data = yield call(getProduct, action.payload);
    yield put(setSelectedProductSuccess(data));
  } catch (error) {
    yield put(setSelectedProductFailed(error.message));
  }
}

function* getProductsWatcher() {
  yield takeEvery(ActionTypes.SET_PRODUCTS, getProductsSaga);
}

function* getProductWatcher() {
  yield takeLeading(ActionTypes.SET_SELECTED_PRODUCT, getProductSaga);
}

export default function* productSaga() {
  yield all([getProductsWatcher(), getProductWatcher()]);
}
