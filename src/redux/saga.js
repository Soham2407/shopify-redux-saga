import { all } from "redux-saga/effects";
import productSaga from "../saga/product.saga";

export default function* () {
  yield all([productSaga()]);
}
